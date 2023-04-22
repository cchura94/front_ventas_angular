import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url_servidor = environment.servidor

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(`${this.url_servidor}/v1/pedido`)
  }
  guardar(datos:any){
    return this.http.post(`${this.url_servidor}/v1/pedido`, datos)    
  }
  mostrar(id: Number){
    return this.http.get(`${this.url_servidor}/v1/pedido/${id}`)    
  }
  modificar(id: Number, datos: any){
    return this.http.put(`${this.url_servidor}/v1/pedido/${id}`, datos) 
  }
  eliminar(id: Number){
    return this.http.delete(`${this.url_servidor}/v1/pedido/${id}`) 
  }
  guardarCliente(datos: any) {
    return this.http.post(`${this.url_servidor}/v1/pedido/nuevo-cliente`, datos)
  }
  buscarCliente(buscar: string){
    return this.http.get(`${this.url_servidor}/v1/pedido/buscar-cliente?buscar=${buscar}`)
  }
}
