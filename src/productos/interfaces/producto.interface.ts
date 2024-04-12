export interface Producto {
    SKU: string;
    Nombre: string;
    stock: number;
    imagen: string;
    calificacion: number;
    categorias_id: number;
    _token: string | null,
}