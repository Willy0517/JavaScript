// Función para verificar si un número es par o impar
 let num = 7, num1= 10; 
    if (num % 2 === 0) {
        console.log("El número es par") ;
    } else {
        console.log("El número es impar");
    }

// Función para clasificar un triángulo según sus lados


    let a=5 , b=5, c=5;
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) 
             console.log("El triángulo es equilátero");
         else if (a === b || b === c || a === c) {
            console.log( "El triángulo es isósceles");
        } else {
         console.log("El triángulo es escaleno");
        }
    } else


// Función para verificar si un número es primo

    if (num1 <= 1) {
         false;
    }
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num1 % i === 0) {
             console.log("no es primo");
        }
    }
     console.log("es primo");