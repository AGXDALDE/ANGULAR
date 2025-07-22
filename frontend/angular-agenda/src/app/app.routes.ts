import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias';
import { ContactosComponent } from './contactos/contactos';

export const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '', redirectTo: 'categorias', pathMatch: 'full' },
];
