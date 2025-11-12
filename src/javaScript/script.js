//tema modo escuro e claro
const dark = document.getElementsByClassName("dark");
const light = document.getElementsByClassName("light");

// Função para aplicar o tema e desabilitar o btn
function aplicarTema(tema) {
  if (tema === "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    document.body.querySelector(".light").disabled = false;
    document.body.querySelector(".dark").disabled = true;
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.body.querySelector(".dark").disabled = false;
    document.body.querySelector(".light").disabled = true;
  }

  // Salva no localStorage
localStorage.setItem("tema", tema);
}

function btnLight() {
  aplicarTema("light");
}

function btnDark() {
  aplicarTema("dark");
}

// Quando a página carrega, verifica e aplica o tema salvo
window.addEventListener("DOMContentLoaded", function () {
  const temaSalvo = localStorage.getItem("tema");
  aplicarTema(temaSalvo);
});

//timer contagem regressiva

const dataFinal = new Date("2025-12-22T23:59:59");

function atualizarContagem() {
  const agora = new Date();
  const diferenca = dataFinal - agora;
  const contadorElement = document.getElementById("contador");

  if (diferenca < 0) {
        clearInterval(intervalo);
        contadorElement.innerHTML =
        "Corre pra saber o prato principal, lá no instagram!";
   return;
   }

  const segundosTotais = Math.floor(diferenca / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const dias = Math.floor(horasTotais / 24);

  const segundos = segundosTotais % 60;
  const minutos = minutosTotais % 60;
  const horas = horasTotais % 24;

  const formatar = (num) => num.toString().padStart(2, "0");

  contadorElement.innerHTML = `${formatar(dias)} dias ${formatar(horas)} horas ${formatar(minutos)} minutos ${formatar(segundos)} segundos`;
}
const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();

//botão para o modal
function verificarTexto() {
  const input = document.getElementById("campoTexto");
  const botao = document.getElementById("meuBotao");

  if (input.value.length > 0) {
    botao.disabled = false;
  } 
  else {
    botao.disabled = true;
  }
}

//Identificar o CEP
async function buscarCep() {
  const cepBRUTO = document.getElementById("campoCep");

  console.log(cepBRUTO);
  console.log(cepBRUTO.value);

  const cep = cepBRUTO.value.trim();

  const URL = `https://viacep.com.br/ws/${cep}/json/`;

  console.log(URL);

  try {
    const resposta = await fetch(URL);
    const resultadoAPI = await resposta.json();
    console.log(resultadoAPI);

    // Preenche o input com a rua
    document.getElementById("enderecoInput").value =
    resultadoAPI.logradouro || "";
  } 
  catch (error) {
    console.log(error);
  }
}

//botão para habilitar o cep
function confirmarCep() {
  const inputCep = document.getElementById("campoCep");
  const botaoCep = document.getElementById("btn");

  if (inputCep.value.length > 0) {
    botaoCep.disabled = false;
  } else {
    botaoCep.disabled = true;
  }
}
