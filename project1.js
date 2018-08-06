var map;
var locations = [];
var tbody = $('#t2').children('tbody');
var table = tbody.length ? tbody : $('#t2');
function initMap() {

    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40,
            lng: -100
        },
        zoom: 4,
    });
}

// set up the style rules and events for google.maps.Data
// map.data.setStyle(styleFeature);
// map.data.addListener('mouseover', mouseInToRegion);
// map.data.addListener('mouseout', mouseOutOfRegion);

// wire up the button
// var selectBox = document.getElementById('census-variable');
// google.maps.event.addDomListener(selectBox, 'change', function() {
// clearCensusData();
// loadCensusData(selectBox.options[selectBox.selectedIndex].value);
// });

// map.data.addListener('click', ev => {
//     const f = ev.marker;
//     const title = f.getProperty('title');
//     const description = f.getProperty('Description');

//     if (!description) {
//         return;
//     }

//     infowindow.setContent(`<b>${title}</b><br/> ${description}`);
//     infowindow.setPosition(f.getGeometry().get());
//     infowindow.setOptions({
//         pixelOffset: new google.maps.Size(0, -30)
    // });
//     infowindow.open(map);
// });




$('#clearBtn').on('click', function (e) {
    e.preventDefault();
    // console.log('working');
    table.empty();
    map.set
});
$('#subBtn').on('click', function (e) {
    e.preventDefault();
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

            var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">' + name + '</h4>'+
            '<div id="bodyContent">'+
            '<p>The median home value in ' + name + ' is $'+ medianValue + '.' +
            '</p>' +
            '</div>'+
            '</div>';
            
            var infowindow = new google.maps.InfoWindow({
                content: contentString
              });

            var myLatlng = new google.maps.LatLng(position.lat, position.lng)

            map.setCenter(myLatlng);
            map.setZoom(11);
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

            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
            google.maps.event.addListener(map, "click", function(event) {
                infowindow.close();
            });
        })

        locations.sort(function(a, b) {
            return a.Description - b.Description;
        });
        locations.reverse();

        for (i=0; i<5; i++){        
            table.append('<tr><td>' + locations[i].title + '</td><td>' + locations[i].Description + '</td></tr>');
            console.log("end: " + i);
        }
}



// console.log();


})