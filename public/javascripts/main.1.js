
$(function() {
    $.ajax({
        method: 'GET',
        url: "http://localhost:3000/ping",
        success: function(data) {
            alert(data);
        }
    })
});