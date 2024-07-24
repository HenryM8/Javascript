/*
Recursión

Hemos visto que podemos usar % (el operador de resto) para verificar si un
número es par o impar al usar % 2 para ver si es divisible por dos. Aquí hay
otra forma de definir si un número entero positivo es par o impar:
• El cero es par.
• El uno es impar.
• Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva isEven que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero positivo) y devolver
un booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. ¿Por qué? ¿Puedes
pensar en una forma de solucionarlo?
*/

/*false en caso de ser par, true en caso de ser impar y en el caso 
de proporcionar un número negativo como es el caso de "-1"
se revienta la pila de llamadas ya que la recursividad no termina
en este caso creando así un bucle infinito
*/
function isEven(number) {
  if (number == 0) {
    return false
  } else if (number == 1) {
    return true
  } else {
    return isEven(number - 2)
  }
}

console.log(isEven(50))

//Solución a números negativos
function isEvenNegative(number) {
  if (number < 0) {
    return 'Esta función está diseñada para números positivos enteros'
  } else if (number == 0) {
    return false
  } else if (number == 1) {
    return true
  } else {
    return isEvenNegative(number - 2)
  }
}

console.log(isEvenNegative(-1))
