import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { PeticionInterceptor } from '../interceptors/peticion.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriaService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PeticionInterceptor,
      multi: true
    },
    CategoriaService,
    ProductoService
  ]
})
export class CoreModule { }
