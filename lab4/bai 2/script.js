let button = document.getElementsByTagName("button")
button[0].addEventListener("click",function (){
    // console.log(document.getElementsByClassName("input-a") )
    let a=document.getElementsByClassName("input-a")[0].children[1].value;
    let b=document.getElementsByClassName("input-b")[0].children[1].value;
    let c=document.getElementsByClassName("input-c")[0].children[1].value;
        
    let output= document.getElementsByClassName("output-answer")[0];
    if(a == 0) {
        if(b == 0) {
            if(c == 0) {
                output.value="Phuong trinh VSN"
                return
            } else {
                output.value="Phuong trinh VN"
                return
            }
        } else {
            x = -c/b
            output.value='Nghiem phuong trinh x = ' + x
            return
        }
    } else {
        dt = b*b - 4*a*c;
        if(dt < 0) {
            output.value='Phuong trinh vo nghiem'
            return;
        } else if(dt == 0) {
            x = -b/(2*a)
            output.value='Nghiem phuong trinh x1 = x2 = ' + x
            return
        } else {
            x1 = (-b + Math.sqrt(dt))/(2*a)
            x2 = (-b - Math.sqrt(dt))/(2*a)
            output.value=`Nghiem x1 = ${x1}, x2 = ${x2}`
            return
        }
    }
})
//ax2 + bx + c = 0
// Nhap a, b, c
// a = parseFloat(prompt('Nhap a = '))
// b = parseFloat(prompt('Nhap b = '))
// c = parseFloat(prompt('Nhap c = '))

// Viet lenh
