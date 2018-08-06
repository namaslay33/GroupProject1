$(function(){
    $("#subBtn").on("click", function(e){
        e.preventDefault();

        //API data: Ticketmaster
        var city = $("#cityselect").val();
        var state = $("#stateselect").val();
        var e = document.getElementById("dropdown");
        var event = e.options[e.selectedIndex].text;
        var key = "i32Y2WiyE1x6zssbAPoPjdgz8OsbUxYw";
       

        $.get("https://app.ticketmaster.com/discovery/v2/events.json?" + "&city=" + city + "&state=" + state + "&classification=" + event + "&apikey=" + key)
        .done(function(response){
            console.log(response);
            console.log(response._embedded.events[0]);
            // ticketmaster(response);
            console.log(event);
        })
    })

    .fail(function(error){

    })
    
});

function ticketMaster (response) {
    var $eventInfo = $("#eventInfo");

    
    // embedded= response.getElementsByTagName("_embedded");
    // array = info[0];
    // events = array.getElementsByTagName("events");

    var events = response._embedded.events[0];
    console.log(response._embedded.events[0]);
    
    for (i=0; i < array.length(); i++) {
        var arrayIndex = events[i];
        info = [arrayIndex[6].getElementsByTagName("url"), arrayIndex[10].getElementByTagName("name"), arrayIndex.getElementsByTagName("name"), arrayIndex[8][0].getElementsByTagName("localDate"), arrayIndex[8][0].getElementsByTagName("localTime"), arrayIndex[16][0].getElementsByTagName("name"), arrayIndex[16][0][12].getElementsByTagName("line1"), arrayIndex[16][0][9].getElementsByTagName("name"), arrayIndex[16][0][10].getElementsByTagName("name"), arrayIndex[16][0].getElementsByTagName("postalCode"), arrayIndex.getElementsByTagName("url")]
    }

    $eventInfo.append("<br>" + info[0] + "</br>" + "<br>" + info[1] + "'s bringing... </br><br>Name: " + info[2] + "</br><br>Date: " + info[3] + " Time: " + info[4] + "</br><br>Venue: " + info[5] + "</br><br>Address: " + info[6] + "</br><br>" + info[7] + ", " + info[8] + " " + info[9] + "</br><br>Website: " + info[10] + "</br>")
}

// array.forEach(element => {
    
// });

// var tmEvents = {};
// posiiton["Event Name"] = eventName;
// position["Event Lat"] = eventLat;
// position["Event Lng"] = eventLat;
// position["Venue"] = eventVenue;


