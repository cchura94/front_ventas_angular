import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias = []
  visible: boolean = false;
  loading: boolean = false

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    detalle: new FormControl('')
  });

  select_id = 0;

  ngOnInit() {
    
  }

  constructor(private categoriaService: CategoriaService) {
    this.listarCategorias()
  }

  listarCategorias() {
    this.loading = true;
    this.categoriaService.listar().subscribe(
      (res: any) => {
        console.log(res)
        this.categorias = res;

        this.loading = false;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
    this.categoriaForm.reset()
    this.select_id = 0
  }
  guardarCategoria() {
    this.loading = true
    if(this.select_id > 0){
      this.categoriaService.modificar(this.select_id, this.categoriaForm.value).subscribe(
        (res: any) => {
          // alert("Categoria registrada")
          this.hideDialog()
          this.listarCategorias()
        },
        (err: any) => {
          alert("Ocurrió un error al modificar la categoria")
        }
      )

    }else{
      this.categoriaService.guardar(this.categoriaForm.value).subscribe(
        (res: any) => {
          // alert("Categoria registrada")
          this.hideDialog()
          this.listarCategorias()
        },
        (err: any) => {
          alert("Ocurrió un error al registrar la categoria")
        }
      )

    }
  }
  editarCategoria(cat: any) {
    this.select_id = cat.id
    this.categoriaForm.setValue({nombre: cat.nombre, detalle: cat.detalle});
    this.showDialog()
  }

  eliminarCategoria(id: any) {
    if(confirm("Esta seguro de eliminar la categoria?")){
      this.categoriaService.eliminar(id).subscribe(
        (res: any) => {
          // alert("Categoria registrada")
          this.hideDialog()
          this.listarCategorias()
        },
        (err: any) => {
          alert("Ocurrió un error al eliminar la categoria")
        }
      )

    }
  }

}
