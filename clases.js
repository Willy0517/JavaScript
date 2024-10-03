class persona{
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
let persona1=new persona("camilo","rocha");
console.log(persona1);

let persona2 = new persona("laura","contreras");
console.log(persona2);

console.log(persona1._nombre);
persona1._nombre = "camilo enrique";
console.log(persona1._nombre);