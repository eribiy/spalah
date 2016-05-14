$( document ).ready(function() {
    $(".switch_btn").click(function(){
       $(".switch_btn").toggleClass("active");
       $(".j-click").toggleClass("collapps");
        return false;
    });
});
$(document).ready(function(){
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
});
/*
$(document).ready(function(){
    $('.select').niceSelect();
});*/
