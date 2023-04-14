import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

import { PasswordModule } from "primeng/password"
import { ButtonModule } from "primeng/button"

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // HttpClientModule,
    CoreModule,
    PasswordModule,
    ButtonModule
  ],
})
export class AuthModule { }
