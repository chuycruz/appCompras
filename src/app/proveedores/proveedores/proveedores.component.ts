import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from '../../servicios/proveedores.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = []
  textBusqueda: string

  campoBusqueda: FormControl
  proveedore: any[] = []

  sinResultados = false

  constructor(private proServices: ProveedoresService) { }

  ngOnInit(): void {

    this.proServices.getProveedores()
      .subscribe((proveedor: any) => {
        for (const id in proveedor){
          const pres = proveedor[id]
          pres.id = id
          this.proveedores.push(proveedor[id])
        }
      })

    this.campoBusqueda = new FormControl()
    this.campoBusqueda.valueChanges
      .subscribe(termindo => {
        this.textBusqueda = termindo
        if(this.textBusqueda.length !== 0 ){
          this.proServices.getProveedoresSearch(this.textBusqueda)
            .subscribe(proveedores => {
              this.proveedores = []
              for (const id in proveedores){
                const pres = proveedores[id]
                pres.id = id
                this.proveedores.push(proveedores[id])
              }
              if (this.proveedores.length < 1 && this.textBusqueda.length >= 1){
                this.sinResultados =true
              } else {
                this.sinResultados = false
              }

            })

        } else {
          this.proveedores = []

          this.proServices.getProveedores()
            .subscribe((proveedor: any) => {
              for (const id in proveedor){
                const pres = proveedor[id]
                pres.id = id
                this.proveedores.push(proveedor[id])
              }
            })
        }
      })
  }

  borrarProveedor(proveedor:any, i:number){
   /* Swal.fire({
      title:'¿Estas seguro?',
      text:`Está seguro de que desea borrar ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton:true,
      showCancelButton: true
    }).then(resp => {
      
    })*/

      this.proveedores.splice(i,1)
      this.proServices.deleteProveedor(proveedor.id).subscribe()
    
  }

}
