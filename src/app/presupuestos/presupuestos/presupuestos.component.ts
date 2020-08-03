import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = []

  constructor(private presupuestoService: PresupuestosService) { }

  ngOnInit(): void {
    this.presupuestoService.getPresupuestos()
      .subscribe((presupuesto: any) => {
        for (const id in presupuesto){
          const pres = presupuesto[id]
          pres.id = id
          this.presupuestos.push(presupuesto[id])
        }
      })
  }

  borrarPresupuesto(presupuesto:any, i:number){
   /* Swal.fire({
      title:'¿Estas seguro?',
      text:`Está seguro de que desea borrar ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton:true,
      showCancelButton: true
    }).then(resp => {
      
    })*/

      this.presupuestos.splice(i,1)
      this.presupuestoService.borrarPresupuesto(presupuesto.id).subscribe()
    
  }

}
