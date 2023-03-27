//Ação do botao

const botao = document.getElementById('botao-enviar')
botao.addEventListener('click', valida)


//Limita quantidade de caracteres
const nome = document.getElementById('name')
nome.maxLength = 51

const assunto = document.getElementById('assunto')
assunto.maxLength = 51

//Verifica se os campos foram preenchidos
const listaInput = document.getElementsByClassName('input')
function validaInput(){
    let mensagem = ''

    for (let i = 0; i < listaInput.length; i++) {
        const input = listaInput[i];

        if (input.value == ''){
            mensagem = 'Este campo deve ser preenchido'
        }
        
        input.setCustomValidity(mensagem)
    }
}

function valida () {
    validaInput()
}