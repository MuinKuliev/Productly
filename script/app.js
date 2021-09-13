$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1110,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,  
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                    // variableWidth: true
                }
            }
        ]
    });

    $('.burger').on('click',function(){
        $('.menu').toggleClass('show__menu');
        $('.burger').toggleClass('activ');
    });
});