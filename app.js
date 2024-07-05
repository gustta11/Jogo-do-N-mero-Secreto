
let listaDeNumeroAleatorio = [];
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;

function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementoNaLista = listaDeNumeroAleatorio.length;

    if(quantidadeDeElementoNaLista == numeroMaximo){
        listaDeNumeroAleatorio = [];
    }

    if(listaDeNumeroAleatorio.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    }else{
        listaDeNumeroAleatorio.push(numeroEscolhido);
        return numeroEscolhido;
    }

}


function exibirNomeNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo(){
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.removeAttribute('disabled');
}

function exibirMensagemInicial(){
    exibirNomeNaTela('h1', 'Jogo do número secreto') ;
    exibirNomeNaTela('p', 'Escolha um número entre 1 e 10') ;
}

function novoJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0;
    exibirMensagemInicial();
    let reiniciar = document.getElementById('reiniciar');
    reiniciar.setAttribute('disabled', true);
}

function verificarChute(){
    
    let chute = parseInt(document.getElementById('chute').value);
    
    tentativas++
    let nomeTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou com  ${tentativas} ${nomeTentativa}`;
    
    if(chute == numeroAleatorio){
        exibirNomeNaTela('h1', 'Acertou');
        exibirNomeNaTela('p',mensagemTentativa);
        reiniciarJogo();
        
    }else{
        if(chute > numeroAleatorio){
            exibirNomeNaTela('p' , 'numero menor');
        }else{
            exibirNomeNaTela('p', 'numero maior');
           
        }   
    }

    limparCampo();

}

