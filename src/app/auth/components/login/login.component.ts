import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { AuthService } from 'src/app/core/services/auth.service';

interface User {
  email: string | null | undefined,
  password: string | null | undefined
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService){}

  ingresar(){

    let datos:User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.authService.loginConNode(datos).subscribe(
      (res: any) => {
        console.log(res)
      },
      (error: any) => {
        console.log(error)
      }
    )
    
  }

}
