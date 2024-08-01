/*
Aplanamiento
Utiliza el método reduce en combinación con el método concat para “aplanar”
un array de arrays en un único array que contenga todos los elementos de los
arrays originales.
*/

function aplanamiento(array) {
  let arrayAplanado = array.reduce((contenedor, arrayEspontaneo) => {
    return contenedor.concat(arrayEspontaneo)
  }, [])
  return arrayAplanado
}

console.log(
  aplanamiento([
    [1, 2, 3],
    ['H', 'O', 'L', 'A'],
    [4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  ])
)
