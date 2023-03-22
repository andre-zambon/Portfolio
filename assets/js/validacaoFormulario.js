
// validacao do nome
    
// nome.maxLength = 51
const nome = document.getElementById('name');
function valida (){
    if (nome.value == ' ') {
        nome.setCustomValidity('O campo deve ser preenchido');
        console.log('teste')
    }
}

valida()

// const botaoEnviar = document.getElementById('botao-enviar');
// botaoEnviar.addEventListener("click", () => {
//     formulario.submit();
// });





// //validacao do email

// const email = document.getElementById('email')
// email.setCustomValidity('O campo deve ser preenchido')

// //validacao do assunto

// const assunto = document.getElementById('assunto')

// nome.maxLength = 51
// assunto.setCustomValidity('O campo deve ser preenchido')

// //validacao da mensagem
// nome.maxLength = 300
// const mensagem = document.getElementById('mensagem')
// mensagem.setCustomValidity('O campo deve ser preenchido')    