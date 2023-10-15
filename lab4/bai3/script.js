random();
function random() {
    let selectId = Math.floor(Math.random()* 8);
    let select= document.getElementById(selectId);
    console.log(selectId)
    select.classList.replace("d-none","d-block");
}
