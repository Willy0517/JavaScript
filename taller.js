
let Mes=4;
const estacion = (Mes) => {
    switch (true) {
      case [12, 1, 2].includes(Mes):
        return 'Invierno';
      case [3, 4, 5].includes(Mes):
        return 'Primavera';
      case [6, 7, 8].includes(Mes):
        return 'Verano';
      case [9, 10, 11].includes(Mes):
        return 'Otoño';
      default:
        throw new Error('Mes inválido');
    }
  };
  console.log(estacion(Mes));