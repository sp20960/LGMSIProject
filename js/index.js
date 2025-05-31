document.addEventListener("DOMContentLoaded", () => {
  const aBugatti = document.querySelector('img[alt="bugatti-tourbillon"]');
  const aBrabus = document.querySelector('img[alt="brabus-bigboy"]');
  const ap1 = document.querySelector('img[alt="p1"]');
  const aNissanGtr = document.querySelector('img[alt="nissan-gtr"]');
  const aSylvia = document.querySelector('img[alt="s15"]');
  const aAudiR8 = document.querySelector('img[alt="audi-r8"]');
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;

  aBugatti.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-bugatti.html`;
  });

  aBrabus.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-brabus.html`;
  });

  ap1.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-p1.html`;
  });

  aNissanGtr.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-nissan-gtr.html`;
  });

  aSylvia.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-s15.html`;
  });

  aAudiR8.addEventListener("click", () => {
    location.href = `${baseURL}/views/article-audi-r8.html`;
  });

});

