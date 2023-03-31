import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

  constructor(private authService: AuthService){
    this.authService.getPerfil().subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }



}
