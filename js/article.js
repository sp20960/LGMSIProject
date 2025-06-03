document.addEventListener("DOMContentLoaded", () => {
  const btnLike = document.querySelector('img[alt="like"]');
  const btnLiked = document.querySelector('img[alt="liked"]');
  let usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];
  let usuari_article = JSON.parse(localStorage.getItem("usuari_article")) || [];
  const articleId = document.body.id;
  let countLike = document.querySelector(".info__like-container p");
  const currentSession = localStorage.getItem("currentSession");
  const totalLikes = usuari_article.filter(u => u.article === articleId);
  countLike.textContent = totalLikes.length || 0;

  if (currentSession) {
    const user = usuari_article.find(u => u.usuari === currentSession && u.article === articleId);
    
    if (user) {
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
      usuari_article.push(
        {
          "article":articleId,
          "usuari":currentSession
        }
      );
      localStorage.setItem("usuari_article", JSON.stringify(usuari_article));
    }
  });

  btnLiked.addEventListener("click", () => {
    if (currentSession) {
      btnLiked.style.display = "none";
      btnLike.style.display = "inherit";

      countLike.textContent = parseInt(countLike.textContent) === 0 ? 0 : parseInt(countLike.textContent) - 1;

      const indexDelete = usuari_article.findIndex(u => u.article === articleId && u.usuari === currentSession);
      usuari_article.splice(indexDelete, 1);
      localStorage.setItem("usuari_article", JSON.stringify(usuari_article));
    }
  });
});
