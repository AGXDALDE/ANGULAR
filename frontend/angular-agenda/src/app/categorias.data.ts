import { of } from 'rxjs';
import { Categoria } from './categorias.model';

let categoriasMock: Categoria[] = [
  { id: 1, nombre: 'Trabajo' },
  { id: 2, nombre: 'Familia' },
  { id: 3, nombre: 'Amigos' }
];

export const CategoriasData = {
  getCategorias: () => of(categoriasMock),
  crearCategoria: (categoria: Categoria) => {
    categoriasMock.push(categoria);
    return of(categoria);
  },
  eliminarCategoria: (id: number) => {
    categoriasMock = categoriasMock.filter(c => c.id !== id);
    return of(true);
  }
};
