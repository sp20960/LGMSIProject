const login = document.getElementById("login");
const usernameInput = document.getElementById("username-id");
const passwordInput = document.getElementById("password-id");
const repasswordInput = document.getElementById("repassword-id");
const btnSubmit = document.getElementById("submit-id");


document.addEventListener("DOMContentLoaded", () => {

  login.addEventListener("click", () => {
    location.href = "/LGMSIProject/views/login.html";
  });

  // VALIDAR USERNAME
  usernameInput.addEventListener("focus", () => {
    const usernameLengthError = document.querySelector("#username-id + p")
    
    usernameInput.addEventListener("blur", () => {
      if (usernameInput.value === ""){
        usernameLengthError.style.display = "none";
      }
    });

    usernameInput.addEventListener("input", () => {
      if(usernameInput.value.length < 4){
        usernameLengthError.style.display = "initial";
        usernameLengthError.style.color = "red"

      }else if (usernameInput.value.length >= 4){
        usernameLengthError.style.color = "green"
      }
    });
  });

  //VALIDAR CONTRASENYA
  passwordInput.addEventListener("focus", () => {
    const expCharcaters = /[A-Z]/
    const passwordLengthError = document.querySelector("#password-id + p")
    const passwordMayusError = document.querySelector("#password-id + p + p")
    passwordLengthError.style.display = "initial"
    passwordMayusError.style.display = "initial"

    passwordInput.addEventListener("blur", () =>{
      if (passwordInput.value === ""){
        passwordLengthError.style.display = "none";
        passwordMayusError.style.display = "none";
      }
    });

    passwordInput.addEventListener("input", () => {
      if (passwordInput.value.length < 6){
        passwordLengthError.style.color = "red";
      }else{
        passwordLengthError.style.color = "green";
      }

      if (!expCharcaters.test(passwordInput.value)){
        passwordMayusError.style.color = "red";
      }else {
        passwordMayusError.style.color = "green";
      }
    });
  });

  //VALIDAR REPETIR CONTRASENYA 
  repasswordInput.addEventListener("input", () => {
    const passwordRepeatError = document.querySelector("#repassword-id + p")

    if (repasswordInput.value !== passwordInput.value){
      passwordRepeatError.style.display = "initial";
      passwordRepeatError.style.color = "red";
    } else {
      passwordRepeatError.style.color = "green"
    }

    repasswordInput.addEventListener("blur", () => {
      if (repasswordInput.value === ""){
        passwordRepeatError.style.display = "none"
      }
    });
  });

  //VALIDAR SUBMIT
  btnSubmit.addEventListener("submit", () => {
    
  });
});