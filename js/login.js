document.addEventListener("DOMContentLoaded", () => {
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;
  const signup = document.getElementById("register");
  const btnSubmit = document.getElementById("formLogIn-id");
  const inputUsername = document.getElementById("username-id")
  const passwordInput = document.getElementById("password-id")
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

  inputUsername.addEventListener("blur", () => {
    if(inputUsername.value !== "" && passwordInput.value !== ""){
      document.querySelector('input[type = "submit"]').disabled = false;
    }else {
      document.querySelector('input[type = "submit"]').disabled = true;
    }
  })

    passwordInput.addEventListener("blur", () => {
    if(inputUsername.value !== "" && passwordInput.value !== ""){
      document.querySelector('input[type = "submit"]').disabled = false;
    } else {
      document.querySelector('input[type = "submit"]').disabled = true;
    }
  })

  btnSubmit.addEventListener("submit", (e) =>  {
    e.preventDefault();
    var authError = document.querySelectorAll(".login-container__input-container p")

    if (!auth(inputUsername.value, passwordInput.value)){
      authError.forEach((p) => {
        p.style.display = "inherit"
        p.style.color = "red"
      })
    }else {
      localStorage.setItem("currentSession", inputUsername.value);
      if(checkIfAdmin(inputUsername.value)){
        location.href = `${baseURL}/views/admin.html`;
      }else {
        location.href = `${baseURL}/index.html`;
      }
    }
  });
});





