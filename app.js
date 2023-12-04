listaDeNumerosSorteados =[];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'brazilian portuguese female', {rate: 1.2});
}

function exibirMensagem(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');
}

exibirMensagem();

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{ 
            if( chute > numeroSecreto){
                exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
            }else{
                exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
            } 
           
            tentativas++;
            limparCampo();
        }
} 


function gerarNumeroAleatorio(){
   let numeroEscolido = parseInt(Math.random() * 1000 + 1);
   let quandidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if( quandidadeDeElementosNaLista == 10){
    listaDeNumerosSorteados == [
    ]
   } 
   if(listaDeNumerosSorteados.includes(numeroEscolido)){
    return gerarNumeroAleatorio();
   } else{
    listaDeNumerosSorteados.push(numeroEscolido)
    return numeroEscolido;
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}