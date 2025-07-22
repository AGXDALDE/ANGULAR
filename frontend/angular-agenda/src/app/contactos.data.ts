import { of } from 'rxjs';
import { Contacto } from './contactos.model';

let contactosMock: Contacto[] = [
  { id: 1, nombre: 'Ana García', telefono: '123456789', email: 'ana@mail.com' },
  { id: 2, nombre: 'Luis Pérez', telefono: '987654321', email: 'luis@mail.com' }
];

export const ContactosData = {
  getContactos: () => of(contactosMock),
  crearContacto: (nuevo: Contacto) => {
    contactosMock.push(nuevo);
    return of(nuevo);
  },
  eliminarContacto: (id: number) => {
    contactosMock = contactosMock.filter(c => c.id !== id);
    return of(true);
  }
};
