import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto.service';



@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent {

  

  @Input() titulo: string = "Valor del Comp Hijo"
  // @Output() varhijo = new EventEmitter();
  @Output() producto = new EventEmitter();

  imagenURL = "https://st.depositphotos.com/1559686/2861/i/600/depositphotos_28615723-stock-photo-technology-in-the-hands.jpg"
  prueba = "Un valor cualquiera"

  productos: any[] = []

  constructor(private productoService: ProductoService){
    this.listaProductos()
  }

  listaProductos(){
    this.productoService.listar().subscribe(
      (res: any) => {
        this.productos = res.rows;
      }
    )

  }

  addCarrito(dato: any){
    // this.varhijo.emit(this.titulo)
    this.producto.emit(dato)
  }

}
