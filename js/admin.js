document.addEventListener("DOMContentLoaded", () => {
  const currentSession = localStorage.getItem("currentSession");
  const usuaris = JSON.parse(localStorage.getItem("usuaris"));
  const repoName = 'LGMSIProject';
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const baseURL = isLocal ? '' : `/${repoName}`;

  function checkIfAdmin(username){
    var res = false;
    usuaris.forEach(element => {
      if (element.usuari === username && element.admin === true){
        res = true;
      }
    })
    return res;
  }

  if(!currentSession){
    location.href = `${baseURL}/index.html`
  } else {
    if (!checkIfAdmin(currentSession)){
      location.href = `${baseURL}/index.html`
    }
  }
});