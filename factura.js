const PRODUCTOS = [
    {
        plu: 20512,
        cantidad: 3,
        precio: 25000
    },
    {
        plu: 20511,
        cantidad: 2,
        precio: 35000
    },
    {
        plu: 20496,
        cantidad: 5,
        precio: 18000
    },
    {
        plu: 291293,
        cantidad: 3,
        precio: 30000
    },
    {
        plu: 267608,
        cantidad: 3,
        precio: 35000
    },
    {
        plu: 261714,
        cantidad: 1,
        precio: 95000
    },
    {
        plu: 261713,
        cantidad: 1,
        precio: 75000
    },
    {
        plu: 20351,
        cantidad: 2,
        precio: 18000
    },
    {
        plu: 20349,
        cantidad: 2,
        precio: 18000
    },
    {
        plu: 192328,
        cantidad: 2,
        precio: 20000
    },
    {
        plu: 20347,
        cantidad: 2,
        precio: 20000
    },
]

const CONTENEDOR = document.querySelector('.container')

let html = ''

PRODUCTOS.forEach(producto => {
    html += `
    <div class="row">
        <div class="col-4 col-md-2">${ producto.plu }</div>
        <div class="col-4 col-md-2">${ producto.cantidad }</div>
        <div class="col-4 col-md-2">${ producto.precio }</div>
    </div>
    `
})

CONTENEDOR.innerHTML = html