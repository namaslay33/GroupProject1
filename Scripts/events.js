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
            

            for(item in info){
                for (i in item) {

                    tmInfo = info._embedded.events;

                    var tr = $("<tr>");
                    tr.appendTo("#eventTable");
                    
                    try{
                    $("<td>").html("<img class=\"eventImg\" src=\"" + tmInfo[i].images[0].url + "\" alt=\"Ticketmaster Image\">")
                    .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }

                    try {
                    $("<td>").html(tmInfo[i].promoter.name + " presents... <br></br>" + tmInfo[i].name)
                    .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }

                    try{
                        $("<td>").html("$" + tmInfo[i].priceRanges[0].min + " - $" + tmInfo[i].priceRanges[0].max)
                        .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }

                    try {
                    $("<td>").html(tmInfo[i].dates.start.localDate + "<br></br>" + tmInfo[i].dates.start.localTime + " " + tmInfo[i].dates.timezone)
                    .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }

                    try {
                    $("<td>").html(tmInfo[i]._embedded.venues[0].name + "<br></br>" + tmInfo[i]._embedded.venues[0].address.line1 + "\n" + tmInfo[i]._embedded.venues[0].city.name + ", " + tmInfo[i]._embedded.venues[0].state.name + " " + tmInfo[i]._embedded.venues[0].postalCode)
                    .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }

                    try {
                    $("<td>").html("Get tickets while available at <br></br> <a href=" + tmInfo[i].url + ">" +tmInfo[i].url + "</a>")
                    .appendTo(tr)
                    }
                    catch{
                        $("<td>").html(" - ")
                        .appendTo(tr)
                    }
                }
                 
            }
           
        })
    })
})

var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');