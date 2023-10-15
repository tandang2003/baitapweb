let arr = [];
for (let i = 0; i < 64; i++) {
    let r = Math.floor(Math.random() * 64) + 1
    while (arr.includes(r)) {
        r = Math.floor(Math.random() * 64) + 1
    }
    arr[i] = r;
}

for (const arrElement of arr) {
    let div = document.createElement("div")
    let button = document.createElement("button")
    button.innerHTML = arrElement;
    div.appendChild(button)
    $('.container')[0].appendChild(div);
}
let cur = 0;

for (let btn of $('button')) {
    btn.addEventListener('click', function () {
        if(btn.innerHTML== cur+1){
            cur= Number.parseInt(btn.innerHTML)
            btn.parentElement.style.visibility = "hidden"
        }else{
            location.reload()
        }
    })
}
