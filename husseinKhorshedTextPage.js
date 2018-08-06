


//This filters based on the input bar

$(document).ready(function() {
        $.getJSON('/schoolList.json' , function(element) {
            console.log(element.schools);
            $.each(element.schools, function(i, d) {
            var row = '<tr>';
            $.each(d, function(j , e) {
                row += '<td>' + e + '</td>';
                // console.log(i , e);
        });
            row += '</tr>';
            $('#mytable').append(row);
        })
        $('#myInput').on("keyup" , function() {
            var value = $(this).val().toLowerCase();
            $('#mytable').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});



        
