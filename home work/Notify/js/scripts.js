$(document).ready(function(){
    $('.wrap_slider').slick({
        infinite: true,
        slidesToShow: 21,
        slidesToScroll: 21
    });
    $(".img1").click(function(){
        $(".text1").toggleClass("active");
    });

    $(".img2").click(function(){
        $("text2").toggleClass("active");
    })
});