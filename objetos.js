let persona ={
    nombre: "william",
    apellido: "urrego",
    telefono: 3043333333,
    email: "micorreo@ejemplo.com",
    edad: 25
}
let persona3= new Object ();
persona3.nombre= "santiago";
persona3.apellido= "navarro";

let persona2={
    nombre: "william",
    apellido: "urrego",
    telefono: 3043333333,
    email: "micorreo@ejemplo.com",
    edad: 25,
    nombrecompleto: function(){return this.nombre +"  "+this.apellido}
}
for(nombrePropiedad in persona){
    console.log(persona["nombre"]);
console.log(persona.apellido);
}
console.log(persona2.nombrecompleto());

for(propiedad in persona){console.log(persona[propiedad]);}

let personaArray1=Object.values(persona);
console.log(personaArray1);

let personaArray=Object.keys(persona);
console.log(personaArray);

let personaString=JSON.stringify(persona);
console.log(personaString);
console.log(persona);

function Persona(nombre="juan",apellido,email){
    this.nombre=nombre;
    this.apellido= apellido;
    this.email=email;
    this.nombrecompleto=function(){
        return this.nombre +"  "+this.apellido;
    }
}
let personaX= new Persona
console.log(personaX);
let padre= new Persona("camilo","rocha","camiloerec98@gmail.com");
console.log(padre)
console.log(padre.nombrecompleto());
let madre = new Persona("laura","contreras","lxcontreras@ejemplo.com");
console.log(madre);
Persona.prototype.telefono=462416
console.log(padre);
console.log(madre);
padre.telefono=1234567;
console.log(padre)
madre.telefono=98765;
console.log(madre);
//closure crear objeto con una funcion anonima
function fSaludar (nombre){
    return("hola "+ nombre);
}
var cliente1 ={
    saludar:fSaludar
}
let saludo=cliente1.saludar("NORBEY");
console.log(saludo);

var contructor=function(precio){
    let miObjeto = {
        preciobase: precio, 
        iva: 1.21, 
        calcularIva:function(){
            return(this.preciobase*this.iva);
        }
    }
    return miObjeto;

}
precio1= contructor(100);
console.log(precio1.calcularIva());

function miFuncion(){
    let count=1
    function contador(){
        console.log(count)
    }
    contador()
}
console.log(miFuncion());
console.log(count);

var x=10;
function foo(){
    var y=20;
    function bar(){
        var z=15;
        var output = x+y+z;
        return output;
    }
    return bar;
}