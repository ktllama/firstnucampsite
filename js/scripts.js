
//        $(function () {
//            $('[data-toggle="tooltip"]').tooltip()
//        })

$(function() {
    $(".carousel").carousel({interval:2000});
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal("show");
    });






});
//this code takes the click of a button event and looks to see if the class is fa-pause if it is it pauses it, removed that class and adds a play button
//to turn the play button back to pause there is a code below that reverses it with an else block