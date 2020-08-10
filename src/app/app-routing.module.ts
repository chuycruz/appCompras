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
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { GuardService } from './servicios/guard.service';
import { AgregarFacturaComponent } from './facturas/facturas/agregar-factura/agregar-factura.component';

const routes: Routes = [
  {path: '', component: InicioComponent, canActivate: [GuardService]},
  {path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService]},
  {path: 'add-proveedor', component: AddproveedorComponent, canActivate: [GuardService]},
  { path:'add-presupuesto', component: AddPresComponent, canActivate: [GuardService] },
  { path:'presupuestos', component: PresupuestosComponent, canActivate: [GuardService]},
  { path:'editar-presupuesto/:id', component: EditarPresupuestoComponent, canActivate: [GuardService] },
  { path:'registro', component: RegistroComponent },
  { path:'inicio-de-sesion', component: InicioSesionComponent },
  { path:'agregar-factura', component: AgregarFacturaComponent },
  {path: '**', component: InicioComponent, canActivate: [GuardService]}
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
