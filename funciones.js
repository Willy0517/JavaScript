function miFuncion(a, b){
    
    console.log("suma: "+(a+b));
}
function suma(num1, num2){
    let resultado;
    resultado = num1 + num2;
    return  resultado;
}
miFuncion(4, 5)
console.log(suma(6,7));

let x = function(a,b){return a+b}
let resultado=x(1,2);
console.log(resultado);

const factorial = function fac(n){
    return n <2 ? 1: n* fac(n - 1);
}
console.log(factorial(3))

const sumarFuncionflecha = (num1,num2)=> num1 + num2;
resultado = sumarFuncionflecha(4,5);
console.log(resultado)