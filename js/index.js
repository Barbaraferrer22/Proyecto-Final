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

cargarProductos(arrayProductos);

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
