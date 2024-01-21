alert('Bem Vindo ao jogo de adivinhação de numero'); // 17/01/2024 para o java script exibir uma mensagem dentro de um alerta o texto deve estar entre aspas simples ou duplas
let numeroSecreto = 6;
let palpite = prompt('Escolha um Numero entre 1 e 10'); //17/01/2024 começando a comparação de variaveis para validar o funcionamento do codigo

if (numeroSecreto == palpite) {
    console.log('parabéns você descobriu (6)');
} else {
    alert('você errou')
}

// falta de atualizações hoje