/*Haciendo un triángulo con bucles
Escribe un bucle que realice siete llamadas a console.log para mostrar el
siguiente triángulo:

#
##
###
####
#####
######
#######
*/

let cadena = ''
for (let llamado = 0; llamado <= 6; llamado++) {
  cadena = cadena + '#'
  console.log(cadena)
}
