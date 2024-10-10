
class Animal {
    constructor(nombre, raza, sexo) {
        this.nombre = nombre;
        this.raza = raza;
        this.sexo = sexo;
    }

    saludar() {
        return `Hola, soy un animal`;
    }
}

class Perro extends Animal {
    constructor(nombre, raza, sexo, tamaño) {
        super(nombre, raza, sexo);
        this.tamaño = tamaño;
    }

    saludar() {
        return `¡Guau! Soy un perro llamado ${this.nombre}, soy ${this.sexo}, de raza ${this.raza}. Mi tamaño es ${this.tamaño}.`;
    }
}

let perro = new Perro("Max", "Labrador", "Macho", "Grande");
console.log(perro.saludar());

class Gato extends Animal {
    constructor(nombre, raza, sexo, colorOjos) {
        super(nombre, raza, sexo);
        this.colorOjos = colorOjos;
    }

    saludar() {
        return `Miau, soy un gato llamado ${this.nombre},soy ${this.sexo} de raza ${this.raza}. Mis ojos son de color ${this.colorOjos}.`;
    }
}
let gato = new Gato("Whiskers", "Siamés", "Hembra", "Verde");
console.log(gato.saludar());

class Vaca extends Animal {
    constructor(nombre, raza, sexo, tipoPelaje) {
        super(nombre, raza, sexo);
        this.tipoPelaje = tipoPelaje;
    }

    saludar() {
        return `Muuu! Soy un una vaca llamado ${this.nombre},soy ${this.sexo} de raza ${this.raza}. Tengo pelaje de color ${this.tipoPelaje}.`;
    }
}

let vaca = new Vaca("Paquita", "Angus", "Hembra", "Negro");
console.log(vaca.saludar());


const miObjeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    ocupacion: "Desarrollador web",
    habilidades: ["HTML", "CSS", "JavaScript"],
    Descripcion: function(){
        const objeto = miObjeto;
        return Hola soy ${objeto.nombre}, tengo ${objeto.edad}, vivo en  ${objeto.ciudad}, me dedico a ${objeto.ocupacion}, mis habilidades son ${objeto.habilidades};
    }
};
for(propiedad in miObjeto){
    console.log(miObjeto[propiedad]);
}
let objetoString=JSON.stringify(miObjeto);
console.log(objetoString)
console.log(miObjeto.Descripcion());