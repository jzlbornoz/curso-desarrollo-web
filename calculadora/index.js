const medida = "cm"

//Medidas Cuadrado
console.group("CUADRADO");

const perimetroCuadrado = (lado) => {
    return ((lado * 4) + medida);
};

const areaCuadrado = (lado) => {
    return ((lado ** 2) + medida + "^2");
};

console.groupEnd();

//Medida Triangulo
console.group("TRIANGULO");

const perimetroTriangulo = (lado1, lado2, base) => {
    return ((lado1 + lado2 + base) + medida)
};

const areaTriangulo = (base, altura) => {
    return (((base * altura) / 2) + medida);
};
console.groupEnd();

//Medida Circulo
console.group("CIRCULO")


const Diametro = (radio) => {
    return (radio * 2);
};

const PI = Math.PI;
const Circunferencia = (radio) => {
    const diametro = Diametro(radio);
    return ((diametro * PI) + medida);
};

const areaCirculo = (radio) => {
    return (((radio ** 2) * PI) + medida + "^2")
};


console.groupEnd();




//Se empieza a interactuar con el HTML

//CUADRADO
function calcularPerimetroCuadrado() {

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = perimetroCuadrado(value);

    const finalResultC = document.getElementById("finalResultC");
    finalResultC.innerText = `El perimetro de su cuadrado es: ${resultado}`;
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultado = areaCuadrado(value);

    const finalResultC = document.getElementById("finalResultC");
    finalResultC.innerText = `El area de su cuadrado es: ${resultado}`;
};

//TRIANGULO
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    const resultado = perimetroTriangulo(value1, value2, value3);

    const finalResult1T = document.getElementById("finalResult1T");
    finalResult1T.innerText = `El Perimetro de su Triangulo es: ${resultado}`;
};

function calcularAreaTriangulo() {

    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const valueAltura = inputAltura.value;

    const resultado = areaTriangulo(valueBase, valueAltura);
    const finalResult2T = document.getElementById("finalResult2T");
    finalResult2T.innerText = `El Area de su Triangulo es: ${resultado}^2`;
};

//CIRCULO

function calcularDiametro() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = Diametro(value);

    const finalResultCi = document.getElementById("finalResultCi");
    finalResultCi.innerText = `El Diametro de su Circulo es: ${resultado}`;
};

function calcularCircunferencia() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = Circunferencia(value);

    const finalResultCi = document.getElementById("finalResultCi");
    finalResultCi.innerText = `La Circunferencia de su Circulo es: ${resultado}`;
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultado = areaCirculo(value);

    const finalResultCi = document.getElementById("finalResultCi");
    finalResultCi.innerText = `El Area de su Circulo es: ${resultado}`;

};