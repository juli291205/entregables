const numeros = [2, 3, 4, 5, 6]
console.log(numeros);

//exponencial  **
const numerosNuevos = numeros.map((numeros) => numeros ** 3);
console.log(numerosNuevos);

//includes
const nombres = ["Alejandro", "Estefani", "Carlos", "Felipe"];
const nombre = "Carlos";
if (nombres.includes(nombre)) {
    console.log(`${nombre} esta presente`);
} else {
    console.log(`${nombre} no esta presente`);
}