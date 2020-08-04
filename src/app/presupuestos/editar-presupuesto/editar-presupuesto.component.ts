import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar-presupuesto',
  templateUrl: './editar-presupuesto.component.html',
  styleUrls: ['./editar-presupuesto.component.css']
})
export class EditarPresupuestoComponent implements OnInit {
  
  presupuestoForm: FormGroup
  presupuesto: any
  base: any
  tipo: any
  iva: any = 0;
  total: any = 0;
  proveedor:string

  id:string


  constructor(private pf: FormBuilder,
              private presupuestoService: PresupuestosService,
              private router: Router,
              private route: ActivatedRoute) { 
                
     this.route.params.subscribe(parametros => {
      this.id = parametros['id']
      this.presupuestoService.getPresupuesto(this.id)
       .subscribe( presupuesto => this.presupuesto = presupuesto)
    })

              }

   ngOnInit(): void {
    /*const id = this.route.snapshot.paramMap.get('id')

    if (id !== 'nuevo'){
      this.presupuestoService.getPresupuesto(id)
        .subscribe((resp) => {
          this.presupuesto = resp
          this.presupuesto.id = id
        })
    }*/

    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['', [ Validators.required, Validators.minLength(10)] ],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
    })

    this.onChange()
  }

  onChange(){
    this.presupuestoForm.valueChanges.subscribe(valor =>{
      this.base = valor.base
      this.tipo = valor.tipo
      this.presupuestoForm.value.iva = this.base * this.tipo
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo)
    })
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto()
    this.presupuestoService.putPresupuesto(this.presupuesto, this.id)
      .subscribe(nuevoPresupuesto => {
        this.router.navigate(['/presupuestos'])
      })

    this.presupuestoForm.reset()
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor : this.presupuestoForm.get('proveedor').value,
      fecha : this.presupuestoForm.get('fecha').value,
      concepto : this.presupuestoForm.get('concepto').value,
      base : this.presupuestoForm.get('base').value,
      tipo : this.presupuestoForm.get('tipo').value,
      iva : this.presupuestoForm.get('iva').value,
      total : this.presupuestoForm.get('total').value,
    }

    return savePresupuesto
  }

}
