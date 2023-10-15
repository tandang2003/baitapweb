let genderButton = document.getElementById("selectGender");
let paymentButton = document.getElementById("selectPayment");

let childr = genderButton.children;

for (const childElement of childr) {
    childElement.addEventListener("click", function () {
        for (const childElement of childr) {
            let target = childElement.getElementsByTagName("button")[0];
            target.classList.remove("select-chosen")
        }
        let target = childElement.getElementsByTagName("button")[0];
        if (target.classList.contains("select-chosen")) return;
        target.classList.add("select-chosen")
    })
}

let child = paymentButton.children;
for (const childElement of child) {
    childElement.addEventListener("click", function () {
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
for (const inputDateElement of inputDate) {
    inputDateElement.addEventListener("click", function () {
        if (inputDateElement.classList.contains("day")) {
            if (inputDateElement.value < 1 || inputDateElement.value > 31) {
                alert("wrong day")
                return;
            }
        }
        if (inputDateElement.classList.contains("month")) {
            if (inputDateElement.value <= 1 || inputDateElement.value > 12) {
                alert("wrong month");
                return;
            }
            if (inputDateElement.value === 2 && (inputDateElement[0] > 29)){
                alert("wrong day")
                return;
            }
        }
        if (inputDateElement.classList.contains("year")) {
           console.log( )
            if (inputDateElement.value <= 1900 || inputDateElement.value > new Date().getFullYear()) {
                alert("wrong year");
                return;
            }
        }
    })

}