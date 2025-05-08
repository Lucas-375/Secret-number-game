// 1. Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
// Feito

// 2. Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio';

// 3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado. 
function botaoConsole() {
    console.log('O botao foi clicado!');
}

// 4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert() {
    console.log('Eu amo JS!');
}

// 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
    cidadeDoBrasil = prompt('Digite uma cidade do Brasil');
    alert(`Estive em ${cidadeDoBrasil} e lembrei de voce!`);
}

// 6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma() {
    let numero1 = parseInt(prompt('Digite um numero'));
    let numero2 = parseInt(prompt('Digite outro numero'));
    let soma = numero1 + numero2;
    alert(`A soma entre ${numero1} e ${numero2} resulta em ${soma}`);
}
