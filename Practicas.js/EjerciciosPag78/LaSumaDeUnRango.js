/*
La suma de un rango
La introducción de este libro insinuó lo siguiente como una forma agradable de
calcular la suma de un rango de números:
console.log(sum(range(1, 10)));
Escribe una función range que tome dos argumentos, inicio y fin, y devuelva
un array que contenga todos los números desde inicio hasta fin, incluyendo
fin.
Luego, escribe una función sum que tome un array de números y devuelva la
suma de estos números. Ejecuta el programa de ejemplo y verifica si realmente
devuelve 55.
Como asignación adicional, modifica tu función range para que tome un
tercer argumento opcional que indique el valor de “paso” utilizado al construir
el array. Si no se proporciona un paso, los elementos deberían aumentar en
incrementos de uno, correspondiendo al comportamiento anterior. La llamada
a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. Asegúrate de
que esto también funcione con valores de paso negativos, de modo que range
(5, 2, -1) produzca [5, 4, 3, 2].
*/

//Función range
function range(inicio, fin) {
  numerosInicioFin = []
  if (typeof inicio === 'number' && typeof fin === 'number') {
    for (let contador = inicio; contador <= fin; contador++) {
      numerosInicioFin.push(contador)
    }
  } else {
    return 'Por favor ingrese dos números'
  }
  return numerosInicioFin
}

console.log(range(0, 10))

//Función sum
function sum(arrayNumeros) {
  sumaDeArray = 0
  for (let contador = 0; contador < arrayNumeros.length; contador++) {
    sumaDeArray += arrayNumeros[contador]
  }
  return sumaDeArray
}

console.log(sum([20, 20, 12, 1.5, 1.5]))

//Función range modificada
function rangeMod(inicio, fin, patron) {
  numerosInicioFin = []
  if (patron > 0) {
    for (let contador = inicio; contador <= fin; contador += patron) {
      {
        numerosInicioFin.push(contador)
      }
    }
  } else if (patron < 0) {
    for (let contador = inicio; contador >= fin; contador += patron) {
      numerosInicioFin.push(contador)
    }
  } else {
    for (let contador = inicio; contador <= fin; contador++) {
      numerosInicioFin.push(contador)
    }
  }
  return numerosInicioFin
}

console.log(rangeMod(0, 10, 2))
console.log(rangeMod(10, 0, -1))
console.log(rangeMod(3, 15))
