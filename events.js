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
        .done(function(info){
            console.log(info);
            // console.log(response._embedded.events[0].name);
            // ticketMaster(response); 
            // ticketMasterError(response);

            for(item in info){
                for (i in item) {

                    tmInfo = info._embedded.events;

                    $("<td>").html(tmInfo[i].images[0].url)
                    .appendTo($("#eventInfo"))

                    $("<td>").html(tmInfo[i].promoter.name)
                    .appendTo($("#eventInfo"))

                    $("<td>").html(tmInfo[i].name)
                    .appendTo($("#eventInfo"))

                    $("<td>").html(tmInfo[i].dates.start.localDate).html(tmInfo[i].dates.start.localTime)
                    .appendTo($("#eventInfo"))

                    $("<td>").html(tmInfo[i]._embedded.venues[0].name)
                    .appendTo($("#eventInfo"))

                    $("<td>").html(tmInfo[i].url)
                    .appendTo($("#eventInfo"))

                    $("<tr>").html(i)
                    .appendTo($("#eventTable"))


                }

                
            }
           
        })
    })
});

    // .fail(function(error){
    //     console.log(error);
    // })
 
    // function ticketMaster (response) {

    //     var events = response._embedded.events;

    //     var objectArray = [];

    //     //Use for in because my api info was an object not an array
    //     for (var e in events) {

    //         var eventsObj = events[e];

    //             try {

                
    //             var info = [eventsObj.images[0].url, eventsObj.promoter.name, eventsObj.name, eventsObj.dates.start.localDate, eventsObj.dates.start.localTime, eventsObj._embedded.venues[0].name, eventsObj._embedded.venues[0].address.line1, eventsObj._embedded.venues[0].city.name, eventsObj._embedded.venues[0].state.name, eventsObj._embedded.venues[0].postalCode, eventsObj.url];
    //             objectArray.push(info);
            
               
    //     // $eventInfo.append("<br>" + info[0] + "</br>" + "<br>" + info[1] + "'s bringing... </br><br>Name: " + info[2] + "</br><br>Date: " + info[3] + " Time: " + info[4] + "</br><br>Venue: " + info[5] + "</br><br>Address: " + info[6] + "</br><br>" + info[7] + ", " + info[8] + " " + info[9] + "</br><br>Website: " + info[10] + "</br>")
    //             // console.log("printed here: " + info);
    //             }
    //             catch {}
    //         //console.log(e + ": " + eventsObj.images[0].url);

    //         // try{
    //         //     console.log(e + ": " +eventsObj.promoter.name);
    //         // }
    //         // catch{"error at index: " + e}
    //         // console.log(eventsObj);
            
            
    //     }
    //     console.log(objectArray);

    //     for(let event in objectArray){
    //         for(item in event){
    //             console.log(item)
    //         }
    //     }

        
            
            // console.log(events[info].images[0].url)
        
    // }
        // for loops only work on arrays
        // for (i=0; i < events.length(); i++) {
        //     var eventsArr = events[i];
        //     info = [eventsArr.images[0].url, eventsArr.promoter.name, eventsArr.name, eventsArr.dates.start.localDate, eventsArr.dates.start.localTime, eventsArr.venues[0].name, eventsArr.venues[0].address.line1, eventsArr.venues[0].city.name, eventsArr.venues[0].state.name, eventsArr.venues[0].postalCode, eventsArr.url]
        // }
    //     var $eventInfo = $("#eventInfo");
    //     $eventInfo.append("<br>" + info[0] + "</br>" + "<br>" + info[1] + "'s bringing... </br><br>Name: " + info[2] + "</br><br>Date: " + info[3] + " Time: " + info[4] + "</br><br>Venue: " + info[5] + "</br><br>Address: " + info[6] + "</br><br>" + info[7] + ", " + info[8] + " " + info[9] + "</br><br>Website: " + info[10] + "</br>")
    // }

    // console.log(eventsArr);

//     function ticketMasterError (respone) {
//         var $eventInfo = $("#eventInfo");
// 		$eventInfo.addClass("hidden");
//     }
    
    




// embedded= response.getElementsByTagName("_embedded");
    // array = info[0];
    // events = array.getElementsByTagName("events");

// array.forEach(element => {
    
// });

// var tmEvents = {};
// posiiton["Event Name"] = eventName;
// position["Event Lat"] = eventLat;
// position["Event Lng"] = eventLat;
// position["Venue"] = eventVenue;


