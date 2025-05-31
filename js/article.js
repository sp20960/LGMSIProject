document.addEventListener("DOMContentLoaded", () => {
  const btnLike = document.querySelector('img[alt="like"]');
  const btnLiked = document.querySelector('img[alt="liked"]');
  let usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];
  let likes = JSON.parse(localStorage.getItem("likes")) || {};
  const articleId = document.body.id;
  let countLike = document.querySelector(".info__like-container p");
  const currentSession = localStorage.getItem("currentSession");

  console.log(articleId);

  countLike.textContent = likes[articleId] || 0;

  if (currentSession) {
    const user = usuaris.find(u => u.usuari === currentSession);
    if (user && user[articleId] === true) {
      btnLiked.style.display = "inherit";
      btnLike.style.display = "none";
    } else {
      btnLiked.style.display = "none";
      btnLike.style.display = "inherit";
    }
  } else {
    btnLiked.style.display = "none";
    btnLike.style.display = "inherit";
  }

  btnLike.addEventListener("click", () => {
    if (currentSession) {
      btnLiked.style.display = "inherit";
      btnLike.style.display = "none";

      countLike.textContent = parseInt(countLike.textContent) + 1;
      likes[articleId] = parseInt(countLike.textContent);
      localStorage.setItem("likes", JSON.stringify(likes));

      const user = usuaris.find(u => u.usuari === currentSession);
      if (user) {
        user[articleId] = true;
        localStorage.setItem("usuaris", JSON.stringify(usuaris));
      }
    }
  });

  btnLiked.addEventListener("click", () => {
    if (currentSession) {
      btnLiked.style.display = "none";
      btnLike.style.display = "inherit";

      countLike.textContent =
        parseInt(countLike.textContent) === 0
          ? 0
          : parseInt(countLike.textContent) - 1;

      likes[articleId] = parseInt(countLike.textContent);
      localStorage.setItem("likes", JSON.stringify(likes));

      const user = usuaris.find(u => u.usuari === currentSession);
      if (user && user[articleId]) {
        user[articleId] = false;
        localStorage.setItem("usuaris", JSON.stringify(usuaris));
      }
    }
  });
});
