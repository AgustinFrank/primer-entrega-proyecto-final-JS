class zapatillas {
  constructor(nombre, categoria, precio, disponibilidad) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
  }
  habilitar() {
    let erorr = "zapatilla disponible";
    if (this.disponibilidad == false) {
      this.disponibilidad = true;
    } else {
      console.log(error);
    }
  }
  deshabilitar() {
    let erorr = "zapatilla no disponible";
    if (this.disponibilidad == true) {
      this.disponibilidad = false;
    } else {
      console.log(error);
    }
  }
}

let zapa1 = new zapatillas("Nike AF1", "street", 35000, true);
let zapa2 = new zapatillas("low DC", "street", 22000, false);
let zapa3 = new zapatillas("Adidas L3", "deportes", 24500, true);
let zapa4 = new zapatillas("Fila Z1", "deportes", 21500, true);
let zapa5 = new zapatillas("Nike SB", "street", 22000, false);
let zapa6 = new zapatillas("Toppper handball", "deportes", 17200, true);
let zapa7 = new zapatillas("Nike AIRMAX", "street", 27500, false);

const inventario = [];

inventario.push(zapa1, zapa2, zapa3, zapa4, zapa5, zapa6, zapa7);

let disponibles = inventario.filter(
  (zapatillas) => zapatillas.disponibilidad == true
);

function agregarZapatilla() {
  let nombreZapaNueva = prompt("ingrese nombre");
  let categoriaNueva = prompt("ingrese categoria");
  let precioNuevo = Number(prompt("ingrese precio"));
  let disponibilidadNueva = confirm("ingrese si esta disponible");
  let zapaNueva = new zapatillas(
    nombreZapaNueva,
    categoriaNueva,
    precioNuevo,
    disponibilidadNueva
  );
  inventario.push(zapaNueva);
}

let cargarZapa = prompt("¿quiere agregar una zapatilla?");

while (cargarZapa == "si") {
  agregarZapatilla();
  cargarZapa = prompt("¿quiere agregar una zapatilla?");
}
console.log(inventario);
