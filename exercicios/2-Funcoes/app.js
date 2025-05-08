// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log('Ola Mundo!');
}

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Ola, ${nome}!`);
}

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroDoNumero(numero) {
    console.log(numero * 2);
}

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media3Numeros(numero1, numero2, numero3) {
    let soma = numero1 + numero2 + numero3;
    let media = soma / 3;
    return media;
}

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorEntre2Numeros(numero1, numero2) {
    let maior = numero1 > numero2 ? numero1 : numero2
    return maior
}

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroAoQuadrado(numero) {
    return numero * numero
}
