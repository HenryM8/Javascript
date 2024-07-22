/*Tablero de ajedrez
Escribe un programa que cree una cadena que represente un tablero de 8x8,
usando caracteres de salto de línea para separar las líneas. En cada posición
del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
formar un tablero de ajedrez.
Al pasar esta cadena a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una variable size
= 8 y cambia el programa para que funcione para cualquier size, generando
un tablero con el ancho y alto dados.*/

//Ejemplo con salto de línea
let tablero = ''
let saltoDeLinea = '\n'

for (let contador = 1; contador <= 4; contador++) {
  tablero =
    '#' +
    ' ' +
    '#' +
    ' ' +
    '#' +
    ' ' +
    '#' +
    saltoDeLinea +
    ' ' +
    '#' +
    ' ' +
    '#' +
    ' ' +
    '#' +
    ' ' +
    '#'
  console.log(tablero)
}

//ejemplo sin salto de línea
let tablero1 = ''

for (let contador = 1; contador <= 8; contador++) {
  tablero1 = '#' + ' ' + '#' + ' ' + '#' + ' ' + '#'
  if (contador % 2 == 0) {
    tablero1 = ' ' + '#' + ' ' + '#' + ' ' + '#' + ' ' + '#'
    console.log(tablero1)
  } else {
    console.log(tablero1)
  }
}

//modificación para definir alto y ancho con variable size
size = 8
let tableroSize = ''
for (let fila = 0; fila < size; fila++) {
  for (let columna = 0; columna < size; columna++) {
    if ((fila + columna) % 2 == 0) {
      tableroSize += '#'
    } else {
      tableroSize += ' '
    }
  }
  tableroSize += '\n'
}
console.log(tableroSize)
