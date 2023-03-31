import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface User {
  email: string|null|undefined,
  password: string|null|undefined,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginConNode(datos: User){
      return this.http.post('http://127.0.0.1:3000/api/auth/login', datos);
  }

  getPerfil(){
    return this.http.get("http://127.0.0.1:3000/api/auth/perfil");
  }

}
