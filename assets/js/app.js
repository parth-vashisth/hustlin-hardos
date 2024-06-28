$('.parentslider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev1",
    nextArrow: ".next1",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.parentslide').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const btnsub = document.querySelector(".sub-btn");
const btnadd = document.querySelector(".add-btn");
const number = document.querySelector(".number");

btnsub.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML - 1;
});

btnadd.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML + 1;
});