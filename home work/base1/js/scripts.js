$(document).ready(function(){
    $('.center').slick({
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 7,
        responsive: [
            {

                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 4
                }
            },
            {

                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            }
        ]
    });
});