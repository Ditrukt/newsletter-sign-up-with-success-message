document.getElementById("subscribe")
.addEventListener("click", function(){
    email = document.querySelector("input");
    err = document.querySelector("err");
    var isValid = isEmailValid(email.value);
    if(isValid){
        document.body.classList.toggle('body-success', true);

        document.querySelector("main").style.display = "none";
        document.querySelector(".success").style.display = "block";
        document.getElementById("email").textContent = email.value;
    }else{
        err.textContent = email.value == '' ? 
            "Oops, form is empty" : "We need valid email";
        email.focus();
    }
    email.classList.toggle('email-error', !isValid);
    err.classList.toggle('error', !isValid);
    document.body.classList.toggle('body-success', isValid);
});

document.getElementById("dismiss")
.addEventListener("click", function(){
    document.querySelector("main").style.display = "block";
    document.querySelector(".success").style.display = "none";
    document.body.classList.toggle('body-success', false);
});

function isEmailValid(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}