const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const genero = document.getElementById("genero");
const cpf = document.getElementById("cpf");
const dataDeNascimento = document.getElementById("dataDeNascimento");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const rua = document.getElementById("rua");
const numero = document.getElementById("numero");
const complemento = document.getElementById("complemento");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const pais = document.getElementById("pais");
const telefone = document.getElementById("telefone");

function formulario() {
  var formulario = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    genero: genero.value,
    cpf: cpf.value,
    dataDeNascimento: dataDeNascimento.value,
    email: email.value,
    senha: senha.value,
    rua: rua.value,
    numero: numero.value,
    complemento: complemento.value,
    cep: cep.value,
    cidade: cidade.value,
    estado: estado.value,
    pais: pais.value,
    telefone: telefone.value,
  };
  return JSON.stringify(formulario);
}

let button = btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const api = "http://localhost:3000/logon";

  fetch(api, {
    method: "POST",
    mode: "cors",
    body: formulario(),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
    .then(() => {
      alert("cadastro realizado");
      return console.log("Cadastro Realizado com sucesso");
    })

    .catch((error) => {
      console.log(error);
    });
});
