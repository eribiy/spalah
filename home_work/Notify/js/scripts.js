$(document).ready(function(){
    $('.wrap_slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 21,
        slidesToScroll: 5
    });
    $(".img1").click(function(){
        $('.text2, .text3, .text4, .text5, .text6, .text7, .text8, .text9, .text10').hide();
        $(".text1").fadeToggle("");
    });

    $(".img2").click(function(){
        $('.text1, .text3, .text4, .text5, .text6, .text7, .text8, .text9, .text10').hide();
        $(".text2").fadeToggle("fast");
    })

    $(".img3").click(function(){
        $('.text1, .text2, .text4, .text5, .text6, .text7, .text8, .text9, .text10').hide();
        $(".text3").fadeToggle("fast");
    })

    $(".img4").click(function(){
        $('.text1, .text2, .text3, .text5, .text6, .text7, .text8, .text9, .text10').hide();
        $(".text4").fadeToggle("fast");
    })

    $(".img5").click(function(){
        $('.text1, .text2, .text3, .text4, .text6, .text7, .text8, .text9, .text10').hide();
        $(".text5").fadeToggle("fast");
    })

    $(".img6").click(function(){
        $('.text1, .text2, .text3, .text4, .text5, .text7, .text8, .text9, .text10').hide();
        $(".text6").fadeToggle("fast");
    })

    $(".img7").click(function(){
        $('.text1, .text2, .text3, .text4, .text5, .text6, .text8, .text9, .text10').hide();
        $(".text7").fadeToggle("fast");
    })

    $(".img8").click(function(){
        $('.text1, .text2, .text3, .text4, .text5, .text6, .text7, .text9, .text10').hide();
        $(".text8").fadeToggle("fast");
    })

    $(".img9").click(function(){
        $('.text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8, .text10').hide();
        $(".text9").fadeToggle("fast");
    })

    $(".img10").click(function(){
        $('.text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8, .text9').hide();
        $(".text10").fadeToggle("fast");
    })
});
