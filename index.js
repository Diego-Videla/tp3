const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const taskinput= document.querySelector("#input-text");
const addForm = document.querySelector(".add-form");
const agregar = document.querySelector(".add-btn");
const conteiner = document.querySelector(".busqueda");
const mensaje= document.querySelector(".mensaje");
  //cargamos el array
let tasklist= JSON.parse(localStorage.getItem("pizzas")) || [];

  // actualizamos el local storage 
const saveLocalStorage=() =>{
  localStorage.setItem("pizzas",JSON.stringify(tasklist));
}
const isValid = () => {
  let isValid = true;
  if (!taskinput.value.length) {
    errormensaje("Por favor, ingrese una pizza");
    isValid = false;
  } 
  return isValid;
}
// Funcion que crea el HTML de una tarea
const crearhtml = (pizza) => {
  const { nombre, precio, imagen } = pizza;
  return `<div class="card-pizza"> <h1> ${nombre} </h1> <img class="imagen" src= ${imagen} > <h3 class="precio" >  ${precio} </h3></div>`;
}

const imprimirpizza = () => {
  conteiner.innerHTML = tasklist.map((pizzas) => crearhtml(pizzas)).join("");
};

const cargarlocalstorage= () =>{
  localStorage.setItem("pizzas", JSON.stringify(tasklist));
}
const cargarlista= (pizza) =>{
  tasklist = [];
  tasklist = [{nombre: pizza.nombre, imagen: pizza.imagen, precio:pizza.precio}];
  cargarlocalstorage();
  imprimirpizza(pizza);
  
}
const errormensaje=(men)=>{
  conteiner.innerHTML=`<p class="error"> ${men}</p>`;
}
const buscarpizza=() =>{
  for(let i=0; i<pizzas.length; i++){
    if(pizzas[i].id == taskinput.value)
      {
        cargarlista(pizzas[i]);
        
        return;
      }
  }
  errormensaje("La pizza no se encontró");
}

const cargarpizza=(e) =>{
  e.preventDefault();
  if(isValid())
  {
    buscarpizza();
  }
}


const init = () =>{
  document.addEventListener("DOMContentLoaded", imprimirpizza)
  addForm.addEventListener("submit", cargarpizza)
  agregar.addEventListener("click", cargarpizza)
}

init();
