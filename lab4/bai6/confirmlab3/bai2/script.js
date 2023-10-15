var phoneno = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
$('#button')[0].addEventListener('click', function () {
    if ($('.name')[0].value === "") {
        $('.name')[0].placeholder = "Please enter your name"
        $('.field-title-name')[0].classList.add("wrong");
        $('.field-title-name').children('h6')[0].classList.add("wrong");
    }
    let email = $('.email')[0];
    if (email.value == "") {
        email.placeholder = "Please enter your email"
        $('.field-title-email')[0].classList.add("wrong");
        $('.field-title-email').children('h6')[0].classList.add("wrong");
    } else if (email.value.lastIndexOf("@") > email.value.lastIndexOf(".") || !email.value.includes("@") || !email.value.includes(".")) {
        email.placeholder = "WRONG SYNTAX EMAIL";
        email.value = "";
        $('.field-title-name')[0].classList.add("wrong");
        $('.field-title-name').children('h6')[0].classList.add("wrong");
    }
    if ($('.phone')[0].value === "") {
        $('.phone')[0].placeholder = "Please enter your phone"
        $('.field-title-phone')[0].classList.add("wrong");
        $('.field-title-phone').children('h6')[0].classList.add("wrong");
    } else if (!$('.phone')[0].value.match(phoneno)) {
        $('.phone')[0].value = "";
        $('.phone')[0].placeholder = "Wrong syntax phone"
        $('.field-title-phone')[0].classList.add("wrong");
        $('.field-title-phone').children('h6')[0].classList.add("wrong");
    }
})
for (const inputnoElement of $('input')) {
    inputnoElement.addEventListener('click',function () {
        if(inputnoElement.parentElement.classList.contains("wrong")){
            inputnoElement.parentElement.classList.remove("wrong")
            inputnoElement.parentElement.children[0].classList.remove("wrong");
        } console.log(inputnoElement.parentElement)
    })
}
