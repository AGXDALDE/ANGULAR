import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosData } from '../contactos.data';
import { Contacto } from '../contactos.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactos.html',
  styleUrls: ['./contactos.css']
})
export class ContactosComponent {
  contactos = signal<Contacto[]>([]);
  nuevoContacto: Contacto = { id: 0, nombre: '', telefono: '', email: '' };

  constructor() {
    effect(() => {
      ContactosData.getContactos().subscribe(data => this.contactos.set(data));
    });
  }

  agregarContacto() {
    const nuevos = this.contactos();
    const nuevoId = nuevos.length > 0 ? Math.max(...nuevos.map(c => c.id)) + 1 : 1;
    const contacto: Contacto = {
      id: nuevoId,
      nombre: this.nuevoContacto.nombre,
      telefono: this.nuevoContacto.telefono,
      email: this.nuevoContacto.email
    };

    ContactosData.crearContacto(contacto).subscribe(() => {
      this.contactos.update(actuales => [...actuales, contacto]);
      this.nuevoContacto = { id: 0, nombre: '', telefono: '', email: '' };
    });
  }

  eliminarContacto(id: number) {
    ContactosData.eliminarContacto(id).subscribe(() => {
      this.contactos.update(actuales => actuales.filter(c => c.id !== id));
    });
  }
}
