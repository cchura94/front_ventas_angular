import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CoreModule } from '../core/core.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProductoComponent } from './components/producto/producto.component';
import {ToastModule} from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    PerfilComponent,
    CategoriaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    
    CoreModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    ProgressSpinnerModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    ConfirmDialogModule
    
  ]
})
export class AdminModule { }
