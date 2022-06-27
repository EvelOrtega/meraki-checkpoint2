/* const form = {
  email: document.querySelector("#login"),
  password: document.querySelector("#password"),
  btnLogin: document.querySelector("#btn-login"),
  errorAlert: document.querySelector("#error"),
}; */
const email = document.querySelector("#login");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#btn-login");
const errorAlert = document.querySelector("#error"); 

function bodyLogin() {
  let dadosLogin = {
    email: email.value,
    senha: password.value,
  };
  return JSON.stringify(dadosLogin);
}

function dashboard() {
  window.open("./dashboard.html", "googleWindow");
}

let button = btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    JSON.stringify({
      email: email.value,
      senha: password.value,
    })
  );
  const api = "http://localhost:3000/login";

  function dashboard() {
    window.open("./dashboard.html", "_blank");
  }


  fetch(api, {
    method: "POST",
    mode: "cors",
    body: bodyLogin(),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then((response) => response.json())
    .then((dados) => {
      if (email.value === dados.email && password.value === dados.senha) {
        return dashboard()
        ;
      } else if (
        email.value !== dados.email &&
        password.value !== dados.senha
      ) {
        errorAlert.innerText = "Usuário não cadastrado";
        return console.log("Usuário não cadastrado");
      } else if (email.value === dados.email &&
        password.value !== dados.senha) {
        errorAlert.innerText = "Email ou senha incorretos";
        return console.log("Email ou senha incorretos");
      }
    })
    .catch((error) => {
      return (error)
    });
});
