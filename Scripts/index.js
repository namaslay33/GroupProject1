$(function() {
    setInterval(function(){
        $("#slider .slides").animate({"margin-left": "-=900px"}, 1000);
    }, 3500);
});