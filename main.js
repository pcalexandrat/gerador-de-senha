const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes);
botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
       //tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
}
