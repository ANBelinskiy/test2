$(document).ready(function () {
    // mobile contacts show
    // скрываем иконку, показываем номера
    $(".show-contacts").click(function () {
        $(this).hide();
        $(".contacts-phone").css({
            "display": "block"
        });
    });

    // slider init
    $('.slider-block').slick({
        // адаптивность при смене слайдов
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,

        // автоплей 4 секунды
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        // fade-эфект
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

});