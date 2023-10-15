let valueToFind = document.getElementById("input");
let p = document.getElementById("textarea");
let button = document.getElementsByTagName("button");
button[0].addEventListener("click", function () {
    if (valueToFind.value != "" && p.value != "") {

        let letterP = p.value.split(" ");
        let letterF = valueToFind.value.split(" ");
        let count = 0;
        let checking = 0;
        for (let i = 0; i < letterP.length ; i++) {
            if (letterP[i] == letterF[checking]) {
                checking++;
                if (checking == letterF.length) {
                    count++;
                    checking = 0;
                }
            } else {
                checking = 0;
            }

        }
       alert("Result is: "+count)
    }
})