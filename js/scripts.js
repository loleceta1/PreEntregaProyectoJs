const productos = [
    { id: 1, titulo: "Masajes Relajación", precio: 999, imagen: '../imagenesTARA/massage-therapy-1612308_1920.jpg' },
    { id: 2, titulo: "Reiki", precio: 800, imagen: '../imagenesTARA/hands-1327811_1920.jpg' },
    { id: 3, titulo: "Tratamiento Facial", precio: 1500, imagen: '../imagenesTARA/woman-3141766_1920.jpg'},
    { id: 4, titulo: "Tratamiento Corporal", precio: ' ',imagen: '../imagenesTARA/woman-567021_1920.jpg'},
];

const agregarAlCarrito = (idProducto) => {

     /*const valorCantidad = document.getElementById(
        `cantidad- ${elementoDelArray.id}`
     ).value*/

    const productoAgregado = productos.find(producto=> producto.id === idProducto);

    carrito.push(productoAgregado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
        title: `Acabas de seleccionar: ${productoAgregado.titulo}`,
        text: "Felicitaciones!",
        imageUrl: `${productoAgregado.imagen}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })  

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
