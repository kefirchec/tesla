let asideLink = document.querySelector(".aside-link");
let sideFooter = document.querySelector(".aside-footer");
let asideInfo = document.querySelector(".aside-info");
let modelsAside = document.querySelector(".models-aside");

asideLink.onclick = function () {
  sideFooter.classList.toggle("open");
  asideInfo.classList.toggle("open");
  asideLink.classList.toggle("open");
  return false;
};
$(document).ready(function () {
  $(".down-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      { duration: 800, esing: "swing" }
    );
  });
});
let asideLinkFooter = document.querySelector(".aside-link__footer");
let asideInfoFooter = document.querySelector(".aside-info__footer");

asideLinkFooter.onclick = function () {
  asideLinkFooter.classList.toggle("open");
  asideInfoFooter.classList.toggle("open");
  sideFooter.classList.toggle("open");
  return false;
};
let headerBurger = document.querySelector(".header-burger");
let headerMenu = document.querySelector(".header-menu");
headerBurger.onclick = function () {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
};
