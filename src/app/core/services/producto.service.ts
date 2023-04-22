import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url_servidor = environment.servidor

  constructor(private http: HttpClient) { }

  listar(page=1, limit=5, q=''){
    // borrar categoria_id=2
    return this.http.get<{rows: Producto[], count: number}>(`${this.url_servidor}/v1/producto?page=${page}&limit=${limit}&q=${q}`)
    // return await axios.get(`${this.url_servidor}/v1/producto?page=1&limit=5&q=&categoria_id=1`);
  }
  guardar(datos:any){
    return this.http.post(`${this.url_servidor}/v1/producto`, datos)    
  }
  mostrar(id: Number){
    return this.http.post(`${this.url_servidor}/v1/producto-mostrar`, {id: id})    
  }
  modificar(id: Number, datos: any){
    return this.http.put(`${this.url_servidor}/v1/producto/${id}`, datos) 
  }
  eliminar(id: Number){
    return this.http.delete(`${this.url_servidor}/v1/producto/${id}`) 
  }

  actualizarImagen(id: number, fd: any){
    return this.http.post(`${this.url_servidor}/v1/producto/${id}/actualizar-imagen`, fd)
  }
}
