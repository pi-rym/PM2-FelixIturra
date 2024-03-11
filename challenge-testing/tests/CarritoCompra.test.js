const CarritoCompra = require("../index");

describe("carrito de compra", () => {
  let carrito;

  /* antes de cada prueba necesitamos tener un carrito nuevo y limpio para evitar confusiones.
  entonces, creamos una nueva instancia de CarritoCompra cada vez que comienza una prueba nueva */
  beforeEach(() => {
    carrito = new CarritoCompra(); // aquí esta creando un carrito nuevo antes de cada prueba para tener un estado limpio y evitar interferencias entre las pruebas.
  });

  it("deberia inicializar el carrito como un array vacio", () => {
    expect(carrito.productos).toEqual([]);
  });

  it("deberia agregar un producto al carrito", () => {
    const producto = { nombre: "producto 1", precio: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.productos).toContain(producto);
  });

  it("deberia calcular el total de la compra correctamente", () => {
    carrito.agregarProducto({ nombre: "producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "producto 2", precio: 20 });
    expect(carrito.calcularTotal()).toBe(30);
  });

  it("deberia aplicar un descuento al total de la compra correctamente", () => {
    carrito.agregarProducto({ nombre: "producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "producto 2", precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(27); 
  });

  it("deberia aplicar un descuento del 0% al total de la compra correctamente", () => {
    carrito.agregarProducto({ nombre: "producto 1", precio: 10 });
    carrito.agregarProducto({ nombre: "producto 2", precio: 20 });
    expect(carrito.aplicarDescuento(0)).toBe(30); 
  });
});
