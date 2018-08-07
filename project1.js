var map;
var locations = [];
var table = $('#t2').children('tbody');

function initMap() {

    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.09024,
            lng: -95.712891
        },
        zoom: 4,
    });
}
$('#subBtn').on('click', function (e) {
    e.preventDefault();
    $('#t2').find("tr:gt(0)").remove();
    locations.length = 0;
    // console.log('help'); 
    // getting the API data from zillow
    var city = $("#cityselect").val();
    var state = $("#stateselect").val();
    $.get('http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18fvjq3ltsb_6ttia&state=' + state + '&city=' + city + '&childtype=neighborhood')
        .done(function (response) {
            myFunction(response);
            // console.log(response);

        })

        .fail(function (error) {
            console.log(error);
        })


    // })

    function myFunction(response) {
        var $xmlResponse = $(response);

        $xmlResponse.find('region').each(function () {
            var $region = $(this);
            var name = $region.find('name').text(),
                medianValue = $region.find('zindex').text(),
                url = $region.find('url').text(),
                lt = $region.find('latitude').text(),
                ln = $region.find('longitude').text(),
                lat = parseFloat(lt),
                lng = parseFloat(ln);

            var position = new Object;
            position["title"] = name;
            position["lat"] = lat;
            position["lng"] = lng;
            position["Description"] = medianValue;
            locations.push(position);

            var contentString = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>' +
                '<div id="bodyContent">' +
                '<p>The median home value in ' + name + ' is $' + medianValue + '.' +
                '</p>' +
                '</div>' +
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var myLatlng = new google.maps.LatLng(position.lat, position.lng)

            map.setCenter(myLatlng);
            map.setZoom(11);

            var x = document.getElementById("floating-panel");
            x.style.display = "block";

            // smoothZoom(map, 11, map.getZoom());
            var icon = {
                url: "/homeicon.png", // url
                scaledSize: new google.maps.Size(30, 30), // scaled size
            };
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: name,
                icon: icon,
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
            google.maps.event.addListener(map, "click", function (event) {
                infowindow.close();
            });
        })

        function mostExpensiveSort() {
            $('#t2').find("tr:gt(0)").remove();
            locations.sort(function (a, b) {
                return a.Description - b.Description;
            });
            locations.reverse();

            for (i = 0; i < 16; i++) {
                table.append('<tr><td>' + locations[i].title + '</td><td>$' + locations[i].Description + '</td></tr>');
                // console.log("end: " + i);
                $('#t2').find("tr:gt(16)").remove();
            }
        }
        mostExpensiveSort();
        function leastExpensiveSort() {
            $('#t2').find("tr:gt(0)").remove();
            locations.sort(function (a, b) {
                return a.Description - b.Description;
            });

            for (i = 0; i < 16; i++) {
                table.append('<tr><td>' + locations[i].title + '</td><td>' + locations[i].Description + '</td></tr>');
                // console.log("end: " + i);
                $('#t2').find("tr:gt(16)").remove();
            }
        }
        $("#most").on('click', function () {
            mostExpensiveSort();
            console.log('high');
        });
        $("#least").on('click', function () {
            leastExpensiveSort();
            console.log('low');
        });
    
        

    }

    // console.log();


})