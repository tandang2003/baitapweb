let button =document.getElementById('button');
var phoneno = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
button.addEventListener('click',function () {
    if(document.getElementsByName("name")[0].value===""){
        document.getElementsByName("name")[0].placeholder="Please enter your name"
    }
    let email=document.getElementsByName("email")[0];
    console.log(email.value.lastIndexOf("@")<email.value.lastIndexOf("."))
    if(email.value===""){
       email.placeholder="Please enter your email"
    } else if(email.value.lastIndexOf("@")>email.value.lastIndexOf(".")||!email.value.includes("@")||!email.value.includes(".")){
        email.placeholder="WRONG SYNTAX EMAIL";
        email.value="";
    }
    if(document.getElementsByName("phone")[0].value===""){
        document.getElementsByName("phone")[0].placeholder="Please enter your phone"
    }else if(!document.getElementsByName("phone")[0].value.match(phoneno)){
        document.getElementsByName("phone")[0].value="";
        document.getElementsByName("phone")[0].placeholder="Wrong syntax phone"
    }
})
