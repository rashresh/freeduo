$(document).ready(function() {

    if($(window).width() < 1024) {


                $("img").removeClass("hide");
        $(".mainbanner").removeClass("container");
        $(".Navlinks").removeClass("active");

    };









$("#Service").on("change",function(){

    var selectedOption = $(this).val();


    if(selectedOption === "Web development"){

        $(".WEBSITE").removeClass("hide");
        $(".INSTAGRAM").addClass("hide");
        return false;


    }


    if(selectedOption === "Instagram Marketing"){

        $(".INSTAGRAM").removeClass("hide");
        $(".WEBSITE").addClass("hide");


    }


});




});



