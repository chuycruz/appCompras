import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.css']
})
export class AddproveedorComponent implements OnInit {

  proveedorForm: FormGroup
  proveedor:any

  ciudades: string[] = ['SLP', 'Cd Valles', 'Matehuala']

  constructor(private router: Router,
              private proServices: ProveedoresService,
              private pf: FormBuilder,) { }

  ngOnInit(): void {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required ],
      cif: ['', Validators.required ],
      direccion: ['', Validators.required ],
      cp: ['', Validators.required ],
      localidad: ['', Validators.required ],
      ciudad: ['', Validators.required ],
      telefono: ['', Validators.required ],
      email: ['', Validators.required ],
      contacto: ['', Validators.required ]
    })

  }

  onSubmit(){
    this.proveedor = this.saveProveedor()
    this.proServices.postProveedores(this.proveedor)
      .subscribe(nuevoProveedor => {
        this.router.navigate(['/proveedores'])
      })

    this.proveedorForm.reset()
  }

  saveProveedor() {
    const saveProveedor = {
      nombre : this.proveedorForm.get('nombre').value,
      cif : this.proveedorForm.get('cif').value,
      direccion : this.proveedorForm.get('direccion').value,
      cp : this.proveedorForm.get('cp').value,
      localidad : this.proveedorForm.get('localidad').value,
      ciudad : this.proveedorForm.get('ciudad').value,
      telefono : this.proveedorForm.get('telefono').value,
      email : this.proveedorForm.get('email').value,
      contacto : this.proveedorForm.get('contacto').value,
    }

    return saveProveedor
  }

}
