var map;
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
    for (i=0; i <= data.schools.length; i++){
      var contact_name = data.schools[i].contact_name,
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
          
          var locations = [];

          var position = new Object;
          position["title"] = contact_name;
          position["lat"] = latitude;
          position["lng"] = longitude;
          position["levels"] = levels ;
          position["website"] = website;
          position["contact_number"] = contact_number;
          position["contact_email"] = contact_email;
          position["street"] = street;
          position["city"] = city;
          position["state"] = state;
          position["zip"] = zip;
          locations.push(position);

          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">' + contact_name + '</h3>'+
            '<div id="bodyContent">'+
            '<p> ' + name + '<br>' + levels + contact_number + contact_email +
            '</p>' 
            '</div>' +
            '</div>';

        //   console.log(locations);
        // console.log(name);
          var infowindow = new google.maps.InfoWindow({
            content: position.title
          });

          var myLatlng = new google.maps.LatLng(position.lat, position.lng);
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
          marker.addListener('click', function (){
            infowindow.open(map, marker);
          });
        //   marker.setVisible(false);

    }
    
    })
  });