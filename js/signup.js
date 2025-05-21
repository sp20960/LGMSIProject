
document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login");
  const usernameInput = document.getElementById("username-id");
  const passwordInput = document.getElementById("password-id");
  const repasswordInput = document.getElementById("repassword-id");
  const isChecked = document.getElementById("politica-id");
  const btnSubmit = document.getElementById("formSignup-id");
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;

  //Funció que verifica si l'usuari ja existeix
  function checkIfUserExists(username) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === username) {
        return true
      }
    }
    return false;
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
  };

  //Link login page
  login.addEventListener("click", () => {
    location.href = `${baseURL}/views/login.html`;
  });

  // VALIDAR USERNAME
  usernameInput.addEventListener("focus", () => {
    var usernameLengthError = document.querySelector("#username-id + p")
    var usernameExistsError = document.querySelector("#username-id + p + p")

    usernameInput.addEventListener("blur", () => {
      if (usernameInput.value === "") {
        usernameLengthError.style.display = "none";
        usernameExistsError.style.display = "none";
      }

      if(checkIfUserExists(usernameInput.value)){
        usernameExistsError.style.display = "initial";
        usernameExistsError.style.color = "red";
      }else{
        usernameExistsError.style.display = "initial";
        usernameExistsError.style.color = "green";
      }

    });

    usernameInput.addEventListener("input", () => {
      if (usernameInput.value.length < 4) {
        usernameLengthError.style.display = "initial";
        usernameLengthError.style.color = "red"

      } else if (usernameInput.value.length >= 4) {
        usernameLengthError.style.color = "green"
      }
    });
  });

  //VALIDAR CONTRASENYA
  passwordInput.addEventListener("focus", () => {
    var expCharacters = /[A-Z]/
    var passwordLengthError = document.querySelector("#password-id + div + p")
    var passwordMayusError = document.querySelector("#password-id + div + p + p")
    var passwordStrengthElement = document.getElementById("passwordStrength-id");

    passwordLengthError.style.display = "initial"
    passwordMayusError.style.display = "initial"

    passwordInput.addEventListener("blur", () => {
      if (passwordInput.value === "") {
        passwordLengthError.style.display = "none";
        passwordMayusError.style.display = "none";
        passwordStrengthElement.style.display = "none"
      }
    });

    passwordInput.addEventListener("input", () => {
      if (passwordInput.value !== "") {
        passwordStrengthElement.style.display = "block"
        checkPasswordStrength();
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
  });

  //VALIDAR REPETIR CONTRASENYA 
  repasswordInput.addEventListener("input", () => {
    const passwordRepeatError = document.querySelector("#repassword-id + p")

    if (repasswordInput.value !== passwordInput.value) {
      passwordRepeatError.style.display = "initial";
      passwordRepeatError.style.color = "red";
    } else {
      passwordRepeatError.style.color = "green"
    }

    repasswordInput.addEventListener("blur", () => {
      if (repasswordInput.value === "") {
        passwordRepeatError.style.display = "none"
      }
    });
  });

  //VALIDAR SUBMIT
  btnSubmit.addEventListener("submit", (e) => {
    var expCharacters = /[A-Z]/
    e.preventDefault();
    if (usernameInput.value.length >= 4
      && passwordInput.value.length > 6
      && expCharacters.test(passwordInput.value)
      && repasswordInput.value === passwordInput.value
      && isChecked.checked
      && !checkIfUserExists(usernameInput.value)
    ) {
      localStorage.setItem(usernameInput.value, passwordInput.value);
    }
  });
});