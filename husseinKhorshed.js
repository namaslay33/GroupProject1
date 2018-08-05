var map;
var markers = [];
function initMap() {

    // load the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 40,
            lng: -100
        },
        zoom: 4,
    });
};
$('#subBtn').on('click', function (e) {
    e.preventDefault();
$.getJSON('https://code.org/schools.json' , function(data) {
    // console.log(data);
    // console.log(data['schools'][0]['zip']);
    // markers = [];
    var schools = data.schools
    for (i=0; i <= data.schools.length; i++){
        (function (schools) {
      var name = data.schools[i].name,
          contact_name = data.schools[i].contact_name,
          levels = data.schools[i].levels[i],
          website = data.schools[i].website,
          contact_number = data.schools[i].contact_number,
          contact_email = data.schools[i].contact_email,
          street = data.schools[i].street,
          city = data.schools[i].city,
          state = data.schools[i].state,
          zip = data.schools[i].zip,
          latitude = data.schools[i].latitude,
          longitude = data.schools[i].longitude;

          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">' + name + '</h3>'+
            '<div id="bodyContent">'+
            '<p> ' 
            + street + '<br>' 
            + city + '<br>' 
            + state + '<br>' 
            + zip + '</p><p>' 
            + contact_name + '<br>'  
            + contact_number + '<br>' 
            + contact_email + '<br>'
            '</p>' 
            '</div>' +
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var myLatlng = new google.maps.LatLng(latitude, longitude);
          var icon = {
            url: "/educationicon.png", // url
            scaledSize: new google.maps.Size(30, 30), // scaled size
        };
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: name,
            icon: icon
          })
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          google.maps.event.addListener(map, "click", function(event) {
            infowindow.close();
        });
        markers.push(marker);
        })(schools[i]);

    }
    
    
    })
  });

  $('#schoolToggle').on('click', function(){
           marker.fadeOut('slow');
  })

