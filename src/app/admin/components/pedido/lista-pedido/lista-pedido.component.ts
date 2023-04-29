import { Component } from '@angular/core';
import { PedidoService } from 'src/app/core/services/pedido.service';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent {

  pedidos: any[] = []
  displayModal: boolean = false;
  pedido: any = {}
  datos_productos: any[] = []

  constructor(private pedidoService: PedidoService){
    this.getPedidos();
  }

  getPedidos(){
    this.pedidoService.listar().subscribe(
      (res: any) => {
        this.pedidos = res
      }
    )

  }

  showModalDialog(pedido: any){
    this.displayModal = true;
    this.pedido =  pedido;

    this.pedidoService.getProductos(pedido.id).subscribe(
      (res: any) => {
        this.datos_productos = res.Productos
      }
    )
  }

  display() {
      window.print();
  }


}
