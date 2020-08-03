import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any = [
    {
      nombre: 'Telefonica',
      cif: 'B123456',
      direccion: 'Nobel 140, Colonia progreso',
      cp: '78370',
      localidad: 'SLP',
      ciudad: 'SLP',
      telefono: 1234567,
      email: 'telefono@mail.com',
      contacto: 'Jesus Cruz'
    },
    {
      nombre: 'Internet',
      cif: 'C123456',
      direccion: 'Gass 387, Colonia progreso',
      cp: '78370',
      localidad: 'SLP',
      ciudad: 'SLP',
      telefono: 1234567,
      email: 'internet@mail.com',
      contacto: 'Zaira Mendoza'
    }
  ]

  constructor() { }

  getProveedores (){
    return this.proveedores
  }
}
