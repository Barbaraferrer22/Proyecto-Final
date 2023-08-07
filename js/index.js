const productosAlCarrito = document.querySelector("span#productosEnCarrito");
const container = document.querySelector("div.containerCard");
const inputSearch = document.querySelector("input#inputSearch");
const URL = "js/productos.json";

function mostrarTotalProductos() {
  productosAlCarrito.textContent = carritoProtuctos.length;
}
carritoProtuctos.length > 0 && mostrarTotalProductos();

function activarClickEnBotones() {
  const botones = document.querySelectorAll("button.button.button-outline");
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      let producto = arrayProductos.find(
        (producto) => producto.id === parseInt(boton.id)
      );
      carritoProtuctos.push(producto);
      localStorage.setItem(
        "CarritoProductos",
        JSON.stringify(carritoProtuctos)
      );
      mostrarTotalProductos();
      Toastify({
        text: "Se agregó el producto al Carrito",
        duration: 3000,
        position: "center",
      }).showToast();
    });
  });
}

function cargarProductos(array) {
  container.innerHTML = "";
  array.forEach((producto) => {
    container.innerHTML += retornarCardHTML(producto);
  });
  activarClickEnBotones();
}

inputSearch.addEventListener("search", () => {
  localStorage.setItem("ultimaBusqueda", inputSearch.value);
  const resultado = arrayProductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  cargarProductos(resultado);
});

function obtenerProductos() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => arrayProductos.push(...data))
    .then(() => cargarProductos(arrayProductos))
    .catch((error) => (container.innerHTML = retornarCardError()));
}
obtenerProductos();
