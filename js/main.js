//Se crea un algoritmo el cual ingresa datos en un array hasta que se finaliza la carga de elementos para posteriormente sumar todos los elementos de adentro y corroborar si es mayor a 50 o 100
let lista = []
let num = parseInt(prompt("Ingrese un numero positivo o -1 para finalizar: "))

while (num != -1 ){
    if (num <= 0){
        alert("El numero ingresado no es positivo, " + "reintente")
    }else{
        lista.push(num) 
    }
    num = parseInt(prompt("Ingrese un nuevo numero o -1 para finalizar: "))
}

let resultado = 0
for (let i = 0; i < lista.length; i++){
    resultado += lista[i]
}
if (resultado <= 50){
    alert("El resultado de la suma de los numeros ingresados es " + resultado +", el cual es menor o igual a 50")
}else if (resultado > 50 && resultado <= 100){
    alert("El resultado de la suma de los numeros ingresados es " + resultado +", el cual es mayor a 50 y menor o igual que 100")
}else{
    alert("El resultado de la suma de los numeros ingresados es " + resultado +", el cual es mayor a 100")
}
