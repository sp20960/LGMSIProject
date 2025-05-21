document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector("#btn-menu");
  const navHeader = document.querySelector("#nav-header");
  const btnClose = document.querySelector("#btn-close img");
  const logoHeader = document.querySelector('img[alt="logo"]');
  const logoFooter = document.querySelector('img[alt="logo-reduit"]')
  const btnLogIn = document.querySelector("#login-id");
  const aHeaderHome = document.querySelector("#nav-header ul li:nth-child(1)");
  const aFooterHome = document.querySelector("#nav-footer > nav ul li:nth-child(1)");
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;
  const navHr = document.querySelectorAll(".links__separators");
  
  btnMenu.addEventListener("click", () => {
    navHeader.classList.add("nav-visible")  ;
    navHr.forEach((item) => {
      item.classList.add("show")
    })
  });

  btnClose.addEventListener("click", () => {
    navHeader.classList.remove("nav-visible");
    navHr.forEach((item) => {
      item.classList.remove("show")
    })
  });

  logoHeader.addEventListener("click", () => {
    location.href = `${baseURL}/index.html`;
  });

  logoFooter.addEventListener("click", () => {
    location.href = `${baseURL}/index.html`;
  });

  btnLogIn.addEventListener("click", () => {
    location.href = `${baseURL}/views/login.html`;
  });

  aHeaderHome.addEventListener("click", () => {
    location.href = `${baseURL}/index.html`;
  });

  aFooterHome.addEventListener("click", () => {
    location.href = `${baseURL}/index.html`;
  });
});

