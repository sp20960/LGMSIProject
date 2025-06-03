document.addEventListener("DOMContentLoaded", () => {
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;
  const signup = document.getElementById("register");
  const btnSubmit = document.getElementById("formLogIn-id");
  const inputUsername = document.getElementById("username-id")
  const passwordInput = document.getElementById("password-id")
  const eyePwd = document.querySelector('img[alt="view_pwd"]')
  var usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];


  //Funció que verifica si existeix l'usuari
  function auth(username, password) {
    const user = usuaris.find(u => u.usuari === username);
    if (!user) return false;

    const salt = CryptoJS.enc.Hex.parse(user.salt);
    const derivedKey = CryptoJS.PBKDF2(username, salt, {
      keySize: 256 / 32,
      iterations: 10000
    }).toString();

    return user.pwd === derivedKey;
  }

  //Funcio que retorna si l'usuari es editor o lector
  function checkIfAdmin(username) {
    var res = false;
    usuaris.forEach(element => {
      if (element.usuari === username && element.admin === true) {
        res = true;
      }
    })
    return res;
  }

  signup.addEventListener("click", () => {
    location.href = `${baseURL}/views/signup.html`;
  });

  inputUsername.addEventListener("input", () => {
    if (inputUsername.value !== "" && passwordInput.value !== "") {
      document.querySelector('input[type = "submit"]').disabled = false;
    } else {
      document.querySelector('input[type = "submit"]').disabled = true;
    }
  })

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value != "") {
      eyePwd.style.display = "inherit";
    }

    if (inputUsername.value !== "" && passwordInput.value !== "") {
      document.querySelector('input[type = "submit"]').disabled = false;
    } else {
      document.querySelector('input[type = "submit"]').disabled = true;
    }
  })

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value === "") {
      eyePwd.style.display = "none"
    }
  })

  eyePwd.addEventListener("click", () => {
    if (eyePwd.src.endsWith("eye_pwd.svg")) {
      console.log("object");
      eyePwd.src = "../assets/img/eyeOff_pwd.svg";
      passwordInput.type = "text"
    } else {
      eyePwd.src = "../assets/img/eye_pwd.svg";
      passwordInput.type = "password"
    }
  });

  btnSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    var authError = document.querySelectorAll(".login-container__input-container p")

    if (!auth(inputUsername.value, passwordInput.value)) {
      authError.forEach((p) => {
        p.style.display = "inherit"
        p.style.color = "red"
      })
    } else {
      localStorage.setItem("currentSession", inputUsername.value);
      if (checkIfAdmin(inputUsername.value)) {
        location.href = `${baseURL}/views/admin.html`;
      } else {
        location.href = `${baseURL}/index.html`;
      }
    }
  });
});