const fecha = new Date();

const fechaNacimiento = new Date("1984-02-08");

const fechaActual =fecha;

const masTarde = fechaActual > fechaNacimiento;

console.log(masTarde);

const dia = fechaNacimiento.getUTCDate();
console.log(dia);

const mes = fechaNacimiento.getUTCMonth();
console.log(mes);

const anyo = fechaNacimiento.getUTCFullYear();

console.log(anyo);