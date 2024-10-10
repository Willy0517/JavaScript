class Personax{
    static contadorPersonas =0;
    email="valor default email";
    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
        if (Persona.contadorPersonas<Persona.MAX_OBJ){
            this.idpersona=++Persona.contadorPersonas
        }
        else
        console.log("se han creado la mayor cantidad de personas")
    }

    get nombre(){
    return this._nombre;
    }
    get apellido(){
    return this._apellido;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    set apellido(apellido){
        this.MAX_OBJapellido=apellido;
    }
    nombreCompleto(){
        return `${this.idpersona} ${this.nombre} ${this.apellido}`
    }
    toString(){
        return this.nombreCompleto();
    }
}
 let persona1=new Persona("william","urrego")
console.log(persona1.toString())
class Empleado extends Personax{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido)
        this._cargo=cargo
    }
    get cargo(){
        return this._cargo;
    }
    set cargo(cargo){
        this._cargo=cargo;
    }
    nombreCompleto(){
        return `${super.nombreCompleto()} ${this._cargo}`
    }
    toString(){
        return this.nombreCompleto();
    }
}
empleado1= new Empleado("santiago","navarro","secretario")
empleado2= new Empleado("alejandro","ruiz","borracho")
empleado3= new Empleado("esteban","rojas","valorant player")
empleado4= new Empleado("nicolas","cadena","futbolista")
empleado5= new Empleado("norbey","muñoz","profesor")
empleado6= new Empleado("william","urrego","ingeniero")
