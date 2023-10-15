let button= document.getElementById("button");
let email= document.getElementById("email");
let password= document.getElementById("password");

button.addEventListener('click',function (){
    for(let input of $('input')){
        console.log(input)
        if(input.value==""){
            input.placeholder="please enter your information"
            input.parentElement.classList.add("wrong")
            input.classList.add("wrong")
        }
    }
    if(email.value.includes("@")&&email.value.lastIndexOf("@")>email.value.lastIndexOf("."))
       email.placeholder="your email wrong syntax"
    email.value=""
        email.parentElement.classList.add("wrong")
        email.classList.add("wrong")
});
for(let input of $('input')){
    input.addEventListener('click',function () {
        if( input.classList.contains("wrong")){
            input.parentElement.classList.remove("wrong")
            input.classList.remove("wrong")
        }
    })
}
let socialIcon= document.querySelectorAll(".icon-container")
for (const socialIconElement of socialIcon) {
        socialIconElement.addEventListener("click",function (){
            alert("please wait for seconds");
        })
}
