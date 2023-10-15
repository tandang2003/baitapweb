let genderButton = document.getElementById("selectGender");
let paymentButton = document.getElementById("selectPayment");

let childr = genderButton.children;
let child = paymentButton.children;
$('#checkbox')[0].addEventListener('click',function () {
    for(const input of $('input')){
        if(input.value==""){
            input.parentElement.parentElement.classList.add("wrong")
        }
    }
    let checkingdr =false;
    for (const childElement of childr) {
        let target = childElement.getElementsByTagName("button")[0];
        if(target.classList.contains("select-chosen")){ checking=true;

        }
    }
    if(!checkingdr){
        genderButton.classList.add("wrong")
    }
    let checking =false;
    for (const childElement of child) {
        let target = childElement.getElementsByTagName("button")[0];
        if(target.classList.contains("select-chosen")){ checking=true;

        }
    }
    if(!checking){
        paymentButton.classList.add("wrong")
    }
    for (const inputDateElement of $('.input-date')) {
            if (inputDateElement.classList.contains("day")) {
                if (inputDateElement.value < 1 || inputDateElement.value > 31) {
                    inputDateElement.value=""
                    inputDateElement.parentElement.parentElement.classList.add("wrong")
                }
            }
            if (inputDateElement.classList.contains("month")) {
                if (inputDateElement.value <= 1 || inputDateElement.value > 12) {
                    inputDateElement.value=""
                    inputDateElement.parentElement.parentElement.classList.add("wrong")
                }
                if (inputDateElement.value === 2 && (inputDateElement[0] > 29)){
                    inputDateElement.value=""
                    inputDateElement.parentElement.parentElement.classList.add("wrong")
                }
            }
            if (inputDateElement.classList.contains("year")) {
                if (inputDateElement.value <= 1900 || inputDateElement.value > new Date().getFullYear()) {
                    inputDateElement.value=""
                    inputDateElement.parentElement.parentElement.classList.add("wrong")
                }
            }

    }

})
for(const input of $('input')){
    input.addEventListener('click',function () {
        input.parentElement.parentElement.classList.remove("wrong")
    })
}
for (const childElement of childr) {
    childElement.addEventListener("click", function () {
        genderButton.classList.remove("wrong")
        for (const childElement of childr) {
            let target = childElement.getElementsByTagName("button")[0];
            target.classList.remove("select-chosen")
        }
        let target = childElement.getElementsByTagName("button")[0];
        if (target.classList.contains("select-chosen")) return;
        target.classList.add("select-chosen")
    })
}


for (const childElement of child) {
    childElement.addEventListener("click", function () {
        paymentButton.classList.remove("wrong")

        for (const childElements of child) {
            childElements.classList.remove("select-chosen")
            for (const childs of childElements.children) {
                childs.classList.remove("select-chosen")
                childs.children[0].classList.remove("select-chosen")
            }
        }
        if (this.classList.contains("select-chosen")) {
            return
        }
        if (!this.classList.contains("select-chosen")) {
            this.classList.add("select-chosen")
            for (const childs of this.children) {
                childs.classList.add("select-chosen")
                childs.children[0].classList.add("select-chosen")
            }
        }

    })
}
let inputDate = document.querySelectorAll(".input-date");
