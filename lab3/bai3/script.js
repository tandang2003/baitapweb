let button= document.getElementById("button");
let email= document.getElementById("email");
let password= document.getElementById("password");

button.addEventListener('click',function (){
    if(email.value=="" || password=="") alert("please enter your information")
    if(email.value.includes("@")&&email.value.lastIndexOf("@")>email.value.lastIndexOf("."))
        alert("your email wrong syntax")
});
let socialIcon= document.querySelectorAll(".icon-container")
for (const socialIconElement of socialIcon) {
        socialIconElement.addEventListener("click",function (){
            alert("please wait for seconds");
        })
}
