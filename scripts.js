var pass1 = document.querySelector("#password");
var pass2 = document.querySelector("#passwordconfirm");
const submit = document.querySelector("#submit");
submit.addEventListener("click" , checkPassword)

function checkPassword(){
    if(pass1.value != pass2.value){
        pass2.classList.add("wrong");
        return;
    }
    pass2.classList.remove("wrong");
}