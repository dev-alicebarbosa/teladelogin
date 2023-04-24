

btn= document.getElementById('btn');
span=document.getElementById("texto");

let adm="Admin";



btn.addEventListener('click', function(event){ 
    event.preventDefault()
    user= document.getElementById('user').value;
    senha= document.getElementById('senha').value;
    

    if(user== adm && senha==adm){
        span.innerHTML= "Login efetuado com sucesso"
        span.classList.remove("login__erro")
        span.classList.add("login__sucesso")
    } else {
        span.innerHTML= "Senha ou Usuário estão incorretos"
        span.classList.remove("login__sucesso")
        span.classList.add("login__erro")
    }

})