const objeto1 = {
    nombre: "Nicol",
    edad: 27,
    colorFav: "Negro",
};

const objeto2 = {
    nombre: "Monica",
    edad: 30,
};

// Spread operator
const objeto3 = { ...objeto1, ...objeto2, equipo: "Boca" };

// console.log(objeto3);

const nuevoObjeto = {
    a: "Algo",
    b: "Otro algo raro",
    c: "Algo más raro",
};

// Rest operator
const { b, ...losDemas } = nuevoObjeto;

console.log(b);
console.log(losDemas);
console.log(losDemas.a);