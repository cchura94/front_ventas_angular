import { Categoria } from "./categoria";

export interface Producto{
    id: number;
    nombre: string;
    precio: number;
    descripcion?: string;
    stock: number;
    categoriaId: number;
    imagen?: string;
    Categoria?: Categoria;
}