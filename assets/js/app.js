let navicon = document.querySelector(".navicon");
let lgview = document.querySelector(".lg-view");
navicon.addEventListener("click", () => {
    lgview.classList.toggle("show");
});
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
    autoplay: false,
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

const accordaon = document.querySelectorAll(".accordion-heading");

accordaon.forEach(acc => {
    acc.addEventListener("click", function () {
        const accacitve = document.querySelector(".accordion.acc-active");
        acc.parentElement.classList.toggle("acc-active");
        accacitve && accacitve.classList.remove("acc-active");
    });
});