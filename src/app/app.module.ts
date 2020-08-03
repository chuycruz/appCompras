import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddPresComponent } from './presupuestos/add-pres/add-pres.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditarPresupuestoComponent } from './presupuestos/editar-presupuesto/editar-presupuesto.component';
import { RegistroComponent } from './auth/registro/registro.component'


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent,
    AddPresComponent,
    PresupuestosComponent,
    EditarPresupuestoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
