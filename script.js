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
