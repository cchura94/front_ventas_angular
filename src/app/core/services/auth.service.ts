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
      return this.http.post('https://jsonplaceholder.typicode.com/post', datos);
  }

}
