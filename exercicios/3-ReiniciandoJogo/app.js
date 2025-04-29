// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorialNumero(numero) {
    let cont = 1;
    let fatorial = 1;
    while (cont <= numero) {
        fatorial = fatorial * cont;
        cont++;
    }
    return fatorial
}

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function dollarParaReal(valor) {
    let moedaReal = valor * 4.80;
    return moedaReal;
}

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetroSalaRetangular(largura, altura) {
    let perimetro = largura * 2 + altura * 2
    let area = largura * altura
    console.log(perimetro, area)
}

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroSalaCircular(raio) {
    let perimetro = raio * 2 * 3.14
    let area = raio * raio * 3.14
    console.log(perimetro, area)
}

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    let cont = 1
    while (cont <= 10) {
        console.log(`${numero} x ${cont} = ${numero * cont}`)
        cont++
    }
}
tabuada(5)