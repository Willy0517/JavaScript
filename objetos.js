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
    nombrecompleto: function(){return
this.nombre +"  "+this.apellido}
}
console.log(persona["nombre"]);
console.log(persona.apellido);