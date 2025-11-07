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
const getHours = () => {
    const clock = document.getElementsByClassName("clock")[0]
    
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours 
    const minute = minutes < 10 ? `0${minutes}` : minutes 
    const second = seconds < 10 ? `0${seconds}` : seconds 
    clock.innerHTML = ` ${hour}:${minutes}:${seconds}`
}

setInterval(() => {
    getHours()
}, 1000)


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



