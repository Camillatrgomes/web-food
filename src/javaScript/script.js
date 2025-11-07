const dark = document.getElementsByClassName("dark");
const light = document.getElementsByClassName("light");


function btnLight() {
document.body.classList.remove("dark");
document.body.classList.add("light");

}

function btnDark() {
document.body.classList.remove("light");
document.body.classList.add("dark");

}

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
