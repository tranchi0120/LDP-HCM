const menu = document.querySelector(".navbar-menu");
const OpenMenu = document.querySelector(".navbar-mobile");
const CLoseMenu = document.querySelector(".menu-close");
const blur = document.querySelector(".blur");

OpenMenu.addEventListener("click", () => {
  menu.classList.add("mobilemenu");
  blur.classList.add("active");
});

CLoseMenu.addEventListener("click", () => {
  menu.classList.remove("mobilemenu");
  blur.classList.remove("active");
});

/*==================== ScrollTop ====================*/

const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");
  if (window.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr__top = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 1500,
  reset: false,
});

sr__top.reveal(
  `.news-box__title,.news-box__title2,.items-box,.post-box,
  .synthetic-right,.box-group span, .box-group svg,.multimedia-box,.multimedia-boxImage,
  .event-main,.library-main,.comp,.links,.synthetic-result,.synthetic-poll`,
  {
    interval: 200,
  }
);
