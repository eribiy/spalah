$(document).ready(function(){
    $('.wrap_slider').slick({
        infinite: true,
        slidesToShow: 21,
        slidesToScroll: 7
    });
    $(".img1").click(function(){
        $(".text1").toggleClass("active");
       
    });

    $(".img2").click(function(){
        $(".text2").toggleClass("active");
    })

    $(".img3").click(function(){
        $(".text3").toggleClass("active");
    })

    $(".img4").click(function(){
        $(".text4").toggleClass("active");
    })

    $(".img5").click(function(){
        $(".text5").toggleClass("active");
    })

    $(".img6").click(function(){
        $(".text6").toggleClass("active");
    })

    $(".img7").click(function(){
        $(".text7").toggleClass("active");
    })

    $(".img8").click(function(){
        $(".text8").toggleClass("active");
    })

    $(".img9").click(function(){
        $(".text9").toggleClass("active");
    })

    $(".img10").click(function(){
        $(".text10").toggleClass("active");
    })
});