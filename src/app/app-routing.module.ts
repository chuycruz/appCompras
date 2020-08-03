import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddPresComponent } from './presupuestos/add-pres/add-pres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditarPresupuestoComponent } from './presupuestos/editar-presupuesto/editar-presupuesto.component';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'add-proveedor', component: AddproveedorComponent},
  { path:'add-presupuesto', component: AddPresComponent },
  { path:'presupuestos', component: PresupuestosComponent },
  { path:'editar-presupuesto/:id', component: EditarPresupuestoComponent },
  { path:'registro', component: RegistroComponent },
  {path: '**', component: InicioComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
