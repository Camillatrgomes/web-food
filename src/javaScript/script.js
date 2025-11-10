//tema modo escuro e claro
const dark = document.getElementsByClassName("dark");
const light = document.getElementsByClassName("light");

function btnLight() {
        document.body.classList.remove("dark");
        document.body.classList.add("light");

     document.body.querySelector(".dark").disabled = false;
    document.body.querySelector(".light").disabled = true;

}

function btnDark() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");

    document.body.querySelector(".light").disabled = false;
    document.body.querySelector(".dark").disabled = true;
}


//timer contagem regressiva

const dataFinal = new Date('2025-12-22T23:59:59');

function atualizarContagem(){
    const agora = new Date();
    const diferenca = dataFinal - agora;
    const contadorElement = document.getElementById("contador")

    if(diferenca < 0){
        clearInterval(intervalo)
        contadorElement.innerHTML = "Corre pra saber o prato principal, lá no instagram!";
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

const intervalo = setInterval (atualizarContagem, 1000);
atualizarContagem();



//botão para o modal
function verificarTexto() {
    const input = document.getElementById ("campoTexto");
    const botao = document.getElementById("meuBotao");

    if (input.value.length > 0) {
        botao.disabled = false;
} else {
    botao.disabled = true; 
}
}

//Identificar o CEP
async function verificarCEP() {
const resposta = await fetch("")

}


