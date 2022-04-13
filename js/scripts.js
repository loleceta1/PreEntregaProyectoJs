let productos = [];
fetch("../data.json")
    .then((response) => response.json())
    .then((data) => generarCards(data.productos))

fetch("../data.json")
    .then((response) => response.json())
    .then((data) => productos = data.productos)

    /*{ id: 1, titulo: "Masajes Relajación", precio: 999, imagen: '../imagenesTARA/massage-therapy-1612308_1920.jpg' },
    { id: 2, titulo: "Reiki", precio: 800, imagen: '../imagenesTARA/hands-1327811_1920.jpg' },
    { id: 3, titulo: "Tratamiento Facial", precio: 1500, imagen: '../imagenesTARA/woman-3141766_1920.jpg'},
    { id: 4, titulo: "Tratamiento Corporal", precio: ' ',imagen: '../imagenesTARA/woman-567021_1920.jpg'},*/


const agregarAlCarrito = (idProducto, cantidadAgregados = 1) => {

     /*const valorCantidad = document.getElementById(
        `cantidad- ${elementoDelArray.id}`
     ).value*/
    
    const productoAgregado = productos.find(producto=> producto.id === idProducto);

    const existeElProducto = productos.findIndex((producto) => producto.id === productoAgregado.id);
    existeElProducto ? productos [existeElProducto].cantidad += cantidadAgregados : carrito.push(productoAgregado);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    //calcularTotalCarrito();

    Swal.fire({
        title: `Acabas de seleccionar: ${productoAgregado.titulo}`,
        text: "Felicitaciones!",
        imageUrl: `${productoAgregado.imagen}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })  

};

const verDetalle = (id) => {
    const existeElProducto = productos.findIndex((producto) =>producto.id === id);

    localStorage.setItem("productoDetalles", JSON.stringify(productos[existeElProducto]));    
    location.href = "/detalle.html";
    };


    
generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div = "producto" class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-3">
                <div class="text-center">
                    <!-- Product name-->
                    <h6 class="fw-bolder">${elementoDelArray.titulo}</h6>
                    <!-- Product price-->
                    <span class=""></span> 
                    $ ${elementoDelArray.precio}
                    ${elementoDelArray.precio > 0 ? '' : 'No Disponible' }
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button id = "btnSeleccionar"
                        onclick="agregarAlCarrito(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="Seleccion">
                        Seleccionar
                    </button>
                    <button class="btn btn-outline-dark mt-auto"
                     onclick="verDetalle(${elementoDelArray.id})"
                     >Ver Info</button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-servicios").innerHTML = cards;
};


const calcularTotalCarrito = () => {
    const totalCarrito = carrito.reduce((accum, productos) => accum + (productos.precio * productos.cantidad), 0);

    document.getElementById("cantidad-seleccionado").innerHTML = totalCarrito;
}


/*// Cart.html
const sumarCantidad = (idProducto) => {
    const indiceEncontradoProducto = carrito.findIndex((elemento) => {
        return elemento.id === idProducto;
    });
    carrito[indiceEncontradoProducto].cantidad += 1;
    // re-renderizar el html
}*/ 