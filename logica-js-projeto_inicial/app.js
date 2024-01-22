alert('Bem Vindo ao jogo de adivinhação de numero'); // para o java script exibir uma mensagem dentro de um alerta o texto deve estar entre aspas simples ou duplas
let limite = 1000

let numeroSecreto = parseInt(Math.random() * limite + 1);
console.log(numeroSecreto);
let palpite; //começando a comparação de variaveis para validar o funcionamento do codigo
let tentativas = 1;

// while permite que o codigo seja repetido até atender os requesitos
while (palpite != numeroSecreto) {
    palpite = prompt(`Escolha um Numero entre 1 e ${limite}`);
    if (isNaN(palpite)) {
        alert('Por favor insira um numero valido.');
    } else {
        if (numeroSecreto == palpite) {
               break; // break serve para interroper o codigo
        } else {
            if(numeroSecreto > palpite) {
                alert(`o numero secreto é maior que ${palpite}`);
             } else {
                alert(`O numero secreto é menor que ${palpite}`);
            }
            tentativas++; // ++ serve para incremento de um valor
        }
    }
    
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`parabéns você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//if(tentativas > 1) {
//    alert(`parabéns você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else{
//    alert(`parabéns você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
