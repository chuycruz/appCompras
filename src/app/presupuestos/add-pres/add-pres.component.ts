import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-add-pres',
  templateUrl: './add-pres.component.html',
  styleUrls: ['./add-pres.component.css']
})
export class AddPresComponent implements OnInit {

  presupuestoForm: FormGroup
  presupuesto: any
  base: any
  tipo: any
  iva: any = 0;
  total: any = 0;

  proveedores: any[] = []

  constructor(private pf: FormBuilder,
              private presupuestoService: PresupuestosService,
              private router: Router,
              private proServices: ProveedoresService) { }

  ngOnInit(): void {
    this.proServices.getProveedores()
      .subscribe((proveedores: any) => {
        for (const id in proveedores){
          const pro = proveedores[id]
          pro.id = id
          this.proveedores.push(proveedores[id])
        }
      })

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
    this.presupuestoService.postPresupuesto(this.presupuesto)
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
