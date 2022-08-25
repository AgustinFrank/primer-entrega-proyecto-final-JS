/*class zapatillas {
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
console.log(inventario);*/

/*const productos = [
  { id: 1, name: "Nike AF1", category: "street", price: 35000 },
  { id: 2, name: "low DC", category: "street", price: 22000 },
  { id: 3, name: "Adidas L3", category: "deportes", price: 24500 },
  { id: 4, name: "Fila Z1", category: "deportes", price: 21500 },
  { id: 5, name: "Nike SB", category: "street", price: 22000 },
  { id: 6, name: "Toppper handball", category: "deportes", price: 17200 },
  { id: 7, name: "Nike AIRMAX", category: "street", price: 27500 },
];

function mostrarProductos() {
  let html = " ";
  for (let i = 0; i < productos.length; i++) {
    html =
      html +
      `  <div>
      <h3>${productos[i].name}</h3>
      <p>Categoria:${productos[i].category}</p>
      <p>Precio:$ ${productos[i].price}</p>
      <p> id: ${productos[i].id}</p>
      </div>
       `;
  }
  document.getElementById("productos").innerHTML = html;
}

mostrarProductos();*/

//FORMULARIO DE CONTACTO

function controlarFormulario() {
  const nombreYApellido = document.getElementById("nombreYApellido").value;
  const email = document.getElementById("email").value;
  const contraseña = document.getElementById("contrasena").value;
  const comentario = document.getElementById("comentario").value;
  document.getElementById("resultado").innerHTML =
    "Gracias por crear su cuenta " + nombreYApellido;
}
