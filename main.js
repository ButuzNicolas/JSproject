/*
function signo(dia, mes) {

    switch (mes) {
        case 1:
            if (dia >= 1 && dia <= 19) {
                return "Capricornio";
            }
            else if (dia >= 20 && dia <= 30) {
                return "Acuario";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 2:
            if (dia >= 1 && dia <= 18) {
                return "Acuario";
            }
            else if (dia >= 19 && dia <= 29) {
                return "Piscis";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 3:
            if (dia >= 1 && dia <= 20) {
                return "Piscis";
            }
            else if (dia >= 21 && dia <= 31) {
                return "Aries";
            }
        case 4:
            if (dia >= 1 && dia <= 19) {
                return "Aries";
            }
            else if (dia >= 20 && dia <= 30) {
                return "Tauro";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 5:
            if (dia >= 1 && dia <= 19) {
                return "Tauro";
            }
            else if (dia >= 20 && dia <= 30) {
                return "Geminis";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 6:
            if (dia >= 1 && dia <= 20) {
                return "Geminis";
            }
            else if (dia >= 21 && dia <= 30) {
                return "Cancer";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 7:
            if (dia >= 1 && dia <= 22) {
                return "Cancer";
            }
            else if (dia >= 23 && dia <= 31) {
                return "Leo";
            }
        case 8:
            if (dia >= 1 && dia <= 22) {
                return "Leo";
            }
            else if (dia >= 23 && dia <= 31) {
                return "Virgo";
            }
        case 9:
            if (dia >= 1 && dia <= 22) {
                return "Virgo";
            }
            else if (dia >= 23 && dia <= 31) {
                return "Libra";
            }
        case 10:
            if (dia >= 1 && dia <= 22) {
                return "Libra";
            }
            else if (dia >= 23 && dia <= 30) {
                return "Escorpio";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 11:
            if (dia >= 1 && dia <= 21) {
                return "Escorpio";
            }
            else if (dia >= 22 && dia <= 30) {
                return "Sagitario";
            }
            else {
                return "- !ERROR - FECHA INGRESADA INEXISTENTE";
            }
        case 12:
            if (dia >= 1 && dia <= 21) {
                return "Sagitario";
            }
            else if (dia >= 22 && dia <= 31) {
                return "Capricornio";
            }
            default:
                return "error."
    }
}

let mes;
let dia;

do {
    mes = Number(prompt("Ingrese numero de su mes de nacimiento"))
} while (mes < 1 || mes > 12)

do {
    dia = Number(prompt("Ingrese numero de su dia de nacimiento"))
} while (dia < 1 || dia > 31)

alert(`Has nacido el ${dia}/${mes}, tu signo es: ${signo(dia, mes)}`);
*/



class Productos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const listaProductos = [
    { nombre: "collar", precio: 2500, cantidad: 6 },
    { nombre: "pantalon", precio: 12500, cantidad: 25 },
];

let valorIngresado = 0;

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el valor del producto:"));
    let cantidad = Number(prompt("Ingrese cantidad de productos en stock:"));

    const producto = new Productos(nombre, precio, cantidad);
    return producto;
}

do {
    valorIngresado = Number(prompt("Elige una opción:\n\n1- Mostrar productos\n2- Agregar producto\n3- Verificar si existe producto\n4- Salir"));
    switch (valorIngresado) {
        case 1:
            listaProductos.forEach(item => {
                alert(`
                    Nombre: ${item.nombre}
                    Precio: ${item.precio}
                    Cantidad: ${item.cantidad}`
                );
            });
            break;
        case 2:
            listaProductos.push(agregarProducto());
            break;
        case 3:
            let nombre = prompt("Ingrese el producto a verificar:");
            alert(listaProductos.some((item) => item.nombre == nombre));
            break;
        case 4:
            valorIngresado = -1;
            break;
        default:
            alert("La opción ingresada no es válida.");
    }
} while (valorIngresado !== -1);