
debugger
class alumno {
    constructor(nombre, edad, notas, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
        this.promedio = promedio;
    }

}


let nombre = prompt("Ingrese el nombre del alumno o -1 para finalizar: ")
let edad = prompt("Ingrese la edad del alumno: ")
let nota = prompt("Ingrese las notas del alumno " + nombre + " o -1 para finalizar la carga de notas: ")
let notas = []
let suma = 0
let cant = 0
while (nota != "-1") {
    notas.push(parseInt(nota))
    suma = suma + parseInt(nota)
    cant++
    nota = prompt("Ingrese las notas del alumno " + nombre + " o -1 para finalizar la carga de notas: ")
}
promedio = suma / cant
const alumno1 = new alumno(nombre, edad, notas, promedio)
alert("El alumno " + alumno1.nombre + " tiene las siguientes notas: " + alumno1.notas + "\n con un promedio de " + alumno1.promedio)

