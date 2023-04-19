import { Component } from '@angular/core';
import { PedidoService } from 'src/app/core/services/pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.scss']
})
export class NuevoPedidoComponent {

  tituloDelPadre: string = "Este es el titulo enviado desde el Padre"
  displayModal: boolean = false

  datodelHijo: string=""
  carrito: any[] = []

  cliente: any = {id: -1, nombre_completo: '', ci_nit:'', correo: '', telefono: '', direccion: ''}

  constructor(private pedidoService: PedidoService){

  }
  capturadatosDelHijo(dato: string) {
    console.log(dato)
    this.datodelHijo = dato
  }

  asignarProducto(prod: any) {
    let p = {productoId: prod.id, nombre: prod.nombre, cantidad: 1, precio: prod.precio}
    this.carrito.push(p)
  }

  showModalDialogCliente(){
    this.displayModal = true
  }

  guardarCliente(){
    this.pedidoService.guardarCliente(this.cliente).subscribe(
      (res: any) => {
        this.cliente = res.cliente
        this.displayModal = false
      }
    )

  }

  guardarPedido(){
    if(this.cliente.id != -1){
      const pedido = {
        clienteId: this.cliente.id,
        carrito: this.carrito,
      }
      this.pedidoService.guardar(pedido).subscribe(
        (res: any) => {
          this.cliente = {id: -1, nombre_completo: '', ci_nit:'', correo: '', telefono: '', direccion: ''}
          this.carrito = [];
          alert("Pedido registrado")
        },
        (error: any) => {
          alert("Error al registrar el pedido")
        }
      )

    }else{
      alert("Seleccionar Cliente")
    }
  }

}
