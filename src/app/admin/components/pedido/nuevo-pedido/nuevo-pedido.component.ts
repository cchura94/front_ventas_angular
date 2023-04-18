import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent {

  tituloDelPadre: string = "Este es el titulo enviado desde el Padre"

  datodelHijo: string=""
  carrito: any[] = []

  capturadatosDelHijo(dato: string) {
    console.log(dato)
    this.datodelHijo = dato
  }

  asignarProducto(prod: any) {
    let p = {id: prod.id, nombre: prod.nombre, cantidad: 1, precio: prod.precio}
    this.carrito.push(p)
  }

}
