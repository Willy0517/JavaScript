class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido = apellido;

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
}
let persona1=new Persona("camilo","rocha");
console.log(persona1);

let persona2 = new  Persona("laura","contreras");
console.log(persona2);

console.log(persona1._nombre);
persona1._nombre = "camilo enrique";
console.log(persona1._nombre);

class Person{
    static  contadorpersonas =0;
    static get MAX_OBJ(){
        return 5;
    }
    static saludar (){
        console.log("saludes desde el metodo estatico");
    }
    static saludar2(person){
        console.log(persona.nombre);
    }
}
let Person1=new Person();
console.log(Person.saludar());