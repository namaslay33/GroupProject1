// $(document).ready(function() {

  $.getJSON('https://code.org/schools.json' , function(data) {
    console.log(data);
    // console.log(data['schools'][0]['zip']);
    
    for (i=0; i <= data.schools.length; i++){
      var name = data.schools[i].name,
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
          position["title"] = name;
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
          console.log(locations);

          // var infowindow = new google.maps.InfoWindow({
          //   content: position.title
          // })

          // var myLatlng = new google.maps.LatLng(position.lat, position.lng);
          // var marker = new google.maps.Marker({
          //   position: myLatlng,
          //   map: map,
          //   title: name,
          // })
          // marker.addListener('click', function (){
          //   infowwindow.open(map, marker);
          // });
    }

  });



   
    


    // });
  








    

