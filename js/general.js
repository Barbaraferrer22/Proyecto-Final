const arrayProductos = [];

const carritoProtuctos =
  JSON.parse(localStorage.getItem("CarritoProductos")) || [];

function retornarCardHTML() {
  return ` 
  <div class="cardPrincipal">
    <div class="card" style="width: 10rem">
    <img src="${producto.imagen}" 
      <div class="card-body ">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">  $ ${producto.importe}</p>
        <div class="comprar"><button class="button button-outline" id="${producto.id}">COMPRAR</button></div>
      </div>
    </div>
  </div>
   `;
}

function retornarCardError() {
  return `<div class="card-error">
              <h3>Vuelve a intentar en unos minutos...</h3>
          </div>`;
}
