document.addEventListener("DOMContentLoaded", () => {

  const login = document.getElementById("login");
  const usernameInput = document.getElementById("username-id");
  const passwordInput = document.getElementById("password-id");
  const repasswordInput = document.getElementById("repassword-id");
  const isChecked = document.getElementById("politica-id");
  const btnSubmit = document.getElementById("formSignup-id");
  const repoName = "LGMSIProject";
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const baseURL = isLocal ? "" : `/${repoName}`;
  const eyePwd = document.querySelector('img[alt="view_pwd"]');
  const eyeRePwd = document.querySelector('img[alt="view_repwd"]')
  const visualCheck = document.querySelectorAll(".input-container img");
  const btnLoginSuccessful = document.querySelector(".signup_successful__button")
  const checkBoxEditor = document.querySelector("#admin-id")
  var usuaris = JSON.parse(localStorage.getItem("usuaris")) || [];


  //Funció que verifica si l'usuari ja existeix
  function checkIfUserExists(username) {
    let res = false;
    usuaris.forEach(u => {
      if (u.usuari === username) {
        res = true;
      }
    });
    return res;
  }

  //Funció que verifica la complexitat de la contrasenya per aplicar un estil a una barra que indica la complexitat de la contrasenya
  function checkPasswordStrength() {
    var strength = 0;

    if (passwordInput.value.length >= 8) {
      strength += 2;
    }

    if (/[A-Z]/.test(passwordInput.value)) {
      strength += 2;
    }

    if (/[a-z]/.test(passwordInput.value)) {
      strength += 2;
    }

    if (/[0-9]/.test(passwordInput.value)) {
      strength += 2;
    }

    var passwordStrengthElement = document.getElementById("passwordStrength-id");

    if (strength < 6) {
      passwordStrengthElement.className = "weak";
      passwordStrengthElement.style.width = "30%";
    } else if (strength >= 6 && strength < 8) {
      passwordStrengthElement.className = "medium";
      passwordStrengthElement.style.width = "70%";
    } else {
      passwordStrengthElement.className = "strong";
      passwordStrengthElement.style.width = "100%";
    }
  }

  //Link login page
  login.addEventListener("click", () => {
    location.href = `${baseURL}/views/login.html`;
  });

  btnLoginSuccessful.addEventListener("click", () => {
    location.href = `${baseURL}/views/login.html`;
  })

  // VALIDAR USERNAME
  usernameInput.addEventListener("focus", () => {
    var usernameLengthError = document.querySelector("#username-id + p");
    var usernameExistsError = document.querySelector("#username-id + p + p");

    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.length < 4) {
        usernameLengthError.style.display = "initial";
        usernameLengthError.style.color = "red";
      } else if (usernameInput.value.length >= 4) {
        usernameLengthError.style.color = "green";
      }
    });

    usernameInput.addEventListener("blur", () => {
      if (checkIfUserExists(usernameInput.value)) {
        usernameExistsError.style.display = "initial";
        usernameExistsError.style.color = "red";
      } else {
        usernameExistsError.style.display = "initial";
        usernameExistsError.style.color = "green";
      }

      if (usernameInput.value === "") {
        usernameLengthError.style.display = "none";
        usernameExistsError.style.display = "none";
        visualCheck[0].style.display = "none"
      }

      if (usernameInput.value.length >= 4 && !checkIfUserExists(usernameInput.value)) {
        visualCheck[0].style.display = "block"
      }
    });
  });

  //VALIDAR CONTRASENYA
  passwordInput.addEventListener("focus", () => {
    var expCharacters = /[A-Z]/;
    var passwordLengthError = document.querySelector("#password-id + div + p");
    var passwordMayusError = document.querySelector("#password-id + div + p + p");
    var passwordStrengthElement = document.getElementById("passwordStrength-id");

    passwordLengthError.style.display = "initial";
    passwordMayusError.style.display = "initial";

    passwordInput.addEventListener("input", () => {
      if (passwordInput.value !== "") {
        passwordStrengthElement.style.display = "block";
        checkPasswordStrength();
        eyePwd.style.display = "inherit"
      }

      if (passwordInput.value.length < 6) {
        passwordLengthError.style.color = "red";
      } else {
        passwordLengthError.style.color = "green";
      }

      if (!expCharacters.test(passwordInput.value)) {
        passwordMayusError.style.color = "red";
      } else {
        passwordMayusError.style.color = "green";
      }
    });

    passwordInput.addEventListener("blur", () => {
      if (passwordInput.value === "") {
        passwordLengthError.style.display = "none";
        passwordMayusError.style.display = "none";
        passwordStrengthElement.style.display = "none";
        visualCheck[1].style.display = "none";
        eyePwd.style.display = "none"
      }

      if (passwordInput.value.length > 6 && expCharacters.test(passwordInput.value)) {
        visualCheck[1].style.display = "block"
      } else {
        visualCheck[1].style.display = "none"
      }
    });

  });

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

  //VALIDAR REPETIR CONTRASENYA
  repasswordInput.addEventListener("input", () => {
    const passwordRepeatError = document.querySelector("#repassword-id + p");
    eyeRePwd.style.display = "inherit"
    if (repasswordInput.value !== passwordInput.value) {
      passwordRepeatError.style.display = "initial";
      passwordRepeatError.style.color = "red";
    } else {
      passwordRepeatError.style.color = "green";
    }

    repasswordInput.addEventListener("blur", () => {
      if (repasswordInput.value === "") {
        passwordRepeatError.style.display = "none";
        eyeRePwd.style.display = "none"
      }

      if (repasswordInput.value === passwordInput.value) {
        visualCheck[2].style.display = "block"
      } else {
        visualCheck[2].style.display = "none"
      }
    });
  });


  eyeRePwd.addEventListener("click", () => {
    if (eyeRePwd.src.endsWith("eye_pwd.svg")) {
      eyeRePwd.src = "../assets/img/eyeOff_pwd.svg";
      repasswordInput.type = "text"
    } else {
      eyeRePwd.src = "../assets/img/eye_pwd.svg";
      repasswordInput.type = "password"
    }

  })

  //VALIDAR SUBMIT
  btnSubmit.addEventListener("submit", (e) => {
    var expCharacters = /[A-Z]/;
    var signupContainer = document.querySelector(".signup-container")
    var signupSuccessfulContainer = document.querySelector(".signup_successful")
    const salt = CryptoJS.lib.WordArray.random(128 / 8);


    e.preventDefault();
    if (
      usernameInput.value.length >= 4 &&
      passwordInput.value.length > 6 &&
      expCharacters.test(passwordInput.value) &&
      repasswordInput.value === passwordInput.value &&
      isChecked.checked &&
      !checkIfUserExists(usernameInput.value)
    ) {
      const key = CryptoJS.PBKDF2(usernameInput.value, salt, {
        keySize: 256 / 32,
        iterations: 10000 // Incrementar segons les necessitats
      });

      usuaris.push(
        {
          "usuari": usernameInput.value,
          "salt": salt.toString(),
          "pwd": key.toString(),
          "admin": checkBoxEditor.checked ? true : false
        }
      );

      localStorage.setItem("usuaris", JSON.stringify(usuaris));

      signupContainer.style.display = "none";
      signupSuccessfulContainer.style.display = "flex";
    }
  });
});
