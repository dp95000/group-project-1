$(document).ready(function(){
    $('#submitWeather').click(function() {

    var area = $("#area").val();
    var prices = $("#prices").val();

    if(area != '') {

    $.ajax({

        url: ,
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);


            $("#area").val('');
            $("#prices").val('');
        }
    })

}else{
    $("#error").html("<div class= Field cannot be empty</div>");
}
})

})