document.addEventListener("DOMContentLoaded", () => {
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;
  const signup = document.getElementById("register");

  signup.addEventListener("click", () => {
    location.href = `${baseURL}/views/signup.html`;
  });

  

});




