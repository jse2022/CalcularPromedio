import "./styles.css";

/**
 * •El DT de los infantiles del equipo de fútbol desea
    saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las
  edades son cargadas al azar (use la función
  aleatorio(menorValor, mayorValor), es decir
  aleatorio(3,7))
• Muestre todas las edades y el promedio de las
  mismas
 */
function promedioEdadJugadores(cantidadAlumnos: number) {
  let sumaEdades: number = 0;
  let edadFutbolistas: number[] = Array(cantidadAlumnos);
  for (let indice = 0; indice < cantidadAlumnos; indice++) {
    edadFutbolistas[indice] = Math.round(Math.random() * (7 - 3) + 3);
    sumaEdades = sumaEdades + edadFutbolistas[indice];
  }
  console.log(edadFutbolistas);
  console.log(`Promedio edades jugadores: ${sumaEdades / cantidadAlumnos}`);
}

let cantidadAlumnos = Number(prompt("Ingrese la cantidad de niños"));
promedioEdadJugadores(cantidadAlumnos);
