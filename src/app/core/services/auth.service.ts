import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface User {
  email: string|null|undefined,
  password: string|null|undefined,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_servidor = environment.servidor

  constructor(private http: HttpClient) { }

  loginConNode(datos: User){
      return this.http.post(`${this.url_servidor}/auth/login`, datos);
  }

  getPerfil(){
    return this.http.get(`${this.url_servidor}/auth/perfil`);
  }

}
