document.addEventListener("DOMContentLoaded", () => {
  const btnLike = document.querySelector('img[alt = "like"]');
  const btnLiked = document.querySelector('img[alt = "liked"]')

  btnLike.addEventListener("click", () => {
    if (localStorage.getItem("currentSession")){
      btnLiked.style.display = "inherit";
      btnLike.style.display = "none"
    }
  });

  btnLiked.addEventListener("click", () => {
    btnLiked.style.display = "none";
    btnLike.style.display = "inherit"
  })

});