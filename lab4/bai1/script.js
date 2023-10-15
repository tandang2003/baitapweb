let button = document.getElementsByTagName("button")
for (const buttonElement of button) {

    buttonElement.addEventListener("click",function (){
        let body=document.getElementsByTagName("body");
        body[0].style.backgroundColor=buttonElement.style.backgroundColor
    })
}