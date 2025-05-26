document.addEventListener("DOMContentLoaded", () => {
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;
  const signup = document.getElementById("register");
  const btnSubmit = document.getElementById("formLogIn-id");
  var usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];


  //Funció que verifica si existeix l'usuari
  function auth(username, password) {
    var res = false;
    usuaris.forEach(element => {
      if(element.usuari === username && element.pwd === password){
        res = true;
      }
    });
    return res
  }

  //Funcio que retorna si l'usuari es editor o lector
  function checkIfAdmin(username){
    var res = false;
    usuaris.forEach(element => {
      if (element.usuari === username && element.admin === true){
        res = true;
      }
    })
    return res;
  }

  signup.addEventListener("click", () => {
    location.href = `${baseURL}/views/signup.html`;
  });

  btnSubmit.addEventListener("submit", (e) =>  {
    e.preventDefault();
    var inputUsername = document.getElementById("username-id").value
    var passwordInput = document.getElementById("password-id").value
    var authError = document.querySelectorAll(".login-container__input-container p")

    if (!auth(inputUsername, passwordInput)){
      authError.forEach((p) => {
        p.style.display = "inherit"
        p.style.color = "red"
      })
    }else {
      localStorage.setItem("currentSession", inputUsername);
      if(checkIfAdmin(inputUsername)){
        location.href = `${baseURL}/views/admin.html`;
      }else {
        location.href = `${baseURL}/index.html`;
      }
    }
  });
});





