/*
Reversión de un array
Los arrays tienen un método reverse que cambia el array invirtiendo el orden en el que aparecen sus elementos. Para este 
ejercicio, escribe dos funciones, reverseArray y reverseArrayInPlace. La primera, reverseArray, debería tomar un array como 
argumento y producir un nuevo array que tenga los mismos elementos en orden inverso. La segunda, reverseArrayInPlace, debería
hacer lo que hace el método reverse: modificar el array dado como argumento
invirtiendo sus elementos. Ninguna de las funciones puede utilizar el método
reverse estándar.
Recordando las notas sobre efectos secundarios y funciones puras en el capítulo anterior, ¿qué variante esperas que sea útil 
en más situaciones? ¿Cuál se ejecuta más rápido?
*/

function reverseArray(array) {
  arrayInverso = []
  for (let contador = 0; contador < array.length; contador++) {
    arrayInverso.unshift(array[contador])
  }
  return arrayInverso
}

console.log(reverseArray(['hola', 0, 1, 2, 3, 4, 5, 6, 'adiós']))

function reverseArrayInPlace(array) {
  arrayInverso = []
  for (let contador = array.length - 1; contador >= 0; contador--) {
    arrayInverso.push(array[contador])
  }

  array = arrayInverso
  return array
}

console.log(reverseArrayInPlace(['hola', 0, 1, 2, 3, 4, 5, 6, 'adiós']))
