import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../categorias.model';
import { CategoriasData } from '../categorias.data';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrls: ['./categorias.css']
})
export class CategoriasComponent {
  categorias = signal<Categoria[]>([]);
  nuevaCategoria: Categoria = { id: 0, nombre: '' };

  constructor() {
    effect(() => {
      CategoriasData.getCategorias().subscribe(data => this.categorias.set(data));
    });
  }

  agregarCategoria() {
    const actuales = this.categorias();
    const nuevoId = actuales.length > 0 ? Math.max(...actuales.map(c => c.id)) + 1 : 1;
    const categoria: Categoria = { id: nuevoId, nombre: this.nuevaCategoria.nombre };

    CategoriasData.crearCategoria(categoria).subscribe(() => {
      this.categorias.update(cat => [...cat, categoria]);
      this.nuevaCategoria = { id: 0, nombre: '' };
    });
  }

  eliminarCategoria(id: number) {
    CategoriasData.eliminarCategoria(id).subscribe(() => {
      this.categorias.update(cat => cat.filter(c => c.id !== id));
    });
  }
}
