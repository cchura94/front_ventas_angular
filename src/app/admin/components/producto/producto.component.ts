import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ProductoComponent implements OnInit {

  productDialog: boolean = false;
  displayModalImage: boolean = false

  products!: any[];
  categorias!: any[];
  loading: boolean = true
  totalRecords: number = 0;

  product: any;

  selectedProducts: any[] | null = [];

  submitted: boolean = false;
  uploadedFiles: any[] = [];

  productoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    stock: new FormControl(''),
    descripcion: new FormControl(''),
    categoriaId: new FormControl('', Validators.required)
  })

  constructor(private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) {
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });

  }

  ngOnInit() {
    this.getProductos()
    this.getCategorias()

  }

  getProductos(event?: LazyLoadEvent) {
    this.loading = true;

    let page: any = 1;
    let limit: any;
    console.log(event)

    if (event?.first && event?.rows) {
      page = (event.first / event.rows) + 1;
      limit = event.rows;
    }

    this.productoService.listar(page, limit).subscribe(
      (data: any) => {
        this.products = data.rows
        this.totalRecords = data.count;

        this.loading = false;
      },
      (error: any) => console.log("error")
    )


  }

  getCategorias() {
    this.categorias = [];

    this.categoriaService.listar().subscribe((res: any) => this.categorias = res)

  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });

  }

  editProduct(product: any) {
    this.product = { ...product };

    this.productoForm = new FormGroup({
      nombre: new FormControl(product.nombre, Validators.required),
      precio: new FormControl(product.precio, Validators.required),
      stock: new FormControl(product.stock),
      descripcion: new FormControl(product.descripcion),
      categoriaId: new FormControl(product.categoriaId, Validators.required)
    })

    this.productDialog = true;
  }

  deleteProduct(product: any) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val.id !== product.id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    // if (this.product.nombre.trim()) {
    if (this.product.id) {
      alert(this.product.id)

      // this.products[this.findIndexById(this.product.id)] = this.product;
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    }
    else {
      this.productoService.guardar(this.productoForm.value).subscribe(
        (res: any) => {
          this.messageService.add({ severity: 'success', summary: 'Correcto', detail: 'Producto Creado', life: 3000 });
          this.getProductos()
        },
        (error: any) => {
          this.messageService.add({ severity: 'error', summary: 'Error al Guardar', detail: 'Ocurrio un error al registrar el producto', life: 3000 });

        }
      )
      // this.product.id = this.createId();
      // this.product.image = 'product-placeholder.svg';
      // this.products.push(this.product);
    }

    this.products = [...this.products];
    this.productDialog = false;
    this.product = {};
    //}
  }

  showModalDialogImage(product: any) {
    this.product = { ...product };
    this.displayModalImage = true;
  }



  myUploader(event?: any) {
    //event.files == files to upload
    console.log(event.files)
    let formData = new FormData();
    formData.append("imagen", event.files[0])

    this.productoService.actualizarImagen(this.product.id, formData).subscribe(
      (res: any) => {
        this.displayModalImage = false;
        this.messageService.add({ severity: 'info', summary: 'Imagen Actualizada', detail: '' });
        this.getProductos();
      },
      (error: any) => {
        alert("Error al Actualizar")
      }
    )

  }


}
