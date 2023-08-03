const tableBody = document.querySelector("tbody");
const sectionProductos = document.querySelector("section");

function listarCarritoHTML(producto) {
  return `<tr>
  <th scope="row">${producto.id}</th>
  <td>${producto.nombre}</td>
  <td>$ ${producto.importe.toLocaleString()}</td>
  <td><button class="buttonEliminar" id="${
    producto.id
  }" onclick="eliminarProducto(${producto.id})">❌</button></td>
</tr>`;
}

function mostrarMensajeCV() {
  return `  <div class="error"><h3>El Carrito esta Vacio 🥀</h3></div>`;
}

function armarCarrito() {
  /*   carritoProtuctos.length = 0; */
  tableBody.innerHTML = "";
  carritoProtuctos.length > 0
    ? carritoProtuctos.forEach(
        (producto) => (tableBody.innerHTML += listarCarritoHTML(producto))
      )
    : (sectionProductos.innerHTML = mostrarMensajeCV());
}

function eliminarProducto(id) {
  let productoIndex = carritoProtuctos.findIndex(
    (producto) => producto.id === id
  );
  if (productoIndex !== -1) {
    carritoProtuctos.splice(productoIndex, 1);
    localStorage.setItem("CarritoProductos", JSON.stringify(carritoProtuctos));
    armarCarrito();
  }
}

armarCarrito();
