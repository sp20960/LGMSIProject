const btnMenu = document.querySelector("#btn-menu");
const navHeader = document.querySelector("#nav-header");
const btnClose = document.querySelector("#btn-close img");
const logoHeader = document.querySelector('img[alt="logo"]');
const logoFooter = document.querySelector('img[alt="logo-reduit"]')
const btnLogIn = document.querySelector("#login-id");
const aHeaderHome = document.querySelector("#nav-header ul li:nth-child(1)");
const aFooterHome = document.querySelector("#nav-footer > nav ul li:nth-child(1)")

btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible")  ;
});

btnClose.addEventListener("click", () => {
  navHeader.classList.remove("nav-visible");
});

logoHeader.addEventListener("click", () => {
  location.href = "/index.html";
});

logoFooter.addEventListener("click", () => {
  location.href = "/index.html";
});

btnLogIn.addEventListener("click", () => {
  location.href = "/views/login.html";
});

aHeaderHome.addEventListener("click", () => {
  location.href = "/index.html";
})

aFooterHome.addEventListener("click", () => {
  location.href = "/index.html";
})
