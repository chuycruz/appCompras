import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.css']
})
export class AddproveedorComponent implements OnInit {
  @ViewChild('formPro') formPro: NgForm

  proveedor:any

  ciudades: string[] = ['SLP', 'Cd Valles', 'Matehuala']

  constructor(private router: Router) { 
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      ciudad: '',
      telefono: null,
      email: '',
      contacto: ''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.proveedor.nombre = this.formPro.value.nombre
    this.proveedor.cif = this.formPro.value.cif
    this.proveedor.direccion = this.formPro.value.direccion
    this.proveedor.cp = this.formPro.value.cp
    this.proveedor.localidad = this.formPro.value.localidad
    this.proveedor.ciudad = this.formPro.value.ciudad
    this.proveedor.telefono = this.formPro.value.telefono
    this.proveedor.email = this.formPro.value.email
    this.proveedor.contacto = this.formPro.value.contacto

    this.formPro.reset()

    this.router.navigate(['/proveedores'])
  }

}
