import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

   
  private proveedoresURL = 'https://appcompras-43e8a.firebaseio.com'
  private proURL = 'https://appcompras-43e8a.firebaseio.com/proveedores'

  constructor(private http: HttpClient) { }

  postProveedores(proveedor: any){
    /*const newproveedor = JSON.stringify(proveedor)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.proveedoresURL, newproveedor, {headers}).pipe(
      map((respuesta: any) => {
        console.log(respuesta.json())
        return respuesta.json
      }))*/ 
  

    return this.http.post(`${ this.proveedoresURL}/proveedores.json`, proveedor)
      .pipe(
        map((resp: any) => {
          console.log(resp)
          proveedor.id = resp.name
          return proveedor
        })
      ) 
  }

  getProveedores(){
    return this.http.get(`${ this.proveedoresURL}/proveedores.json`)
      .pipe(
        map(resp => resp)
      )
  }

  getProveedor(id: string){
   const url = `${this.proURL}/${id}.json`;
    return this.http.get(url)
    .pipe(
      map(resp => resp)
    )
     /*return this.http.get(`https://appcompras-43e8a.firebaseio.com/presupuesto/${id}.json`)*/
  }

  putProveedor(proveedor:any, id: string){
    const url = `${this.proURL}/${id}.json`
    const newPro = JSON.stringify(proveedor)
    /*const headers = new HttpHeaders()
    .append(
      'Content-Type', 'application/json'
    )*/

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    return this.http.put(url, newPro, {headers})
      .pipe (
        map( resp => {
          console.log(resp)
          return resp
        })
      )
    
  /*return this.http.put(`https://appcompras-43e8a.firebaseio.com/presupuesto/${id}.json`, presupuesto)*/
  }

  

  deleteProveedor(id: string){
    return this.http.delete(`${this.proURL}/${id}.json`)
  }

  getProveedoresSearch(textBusqueda: string){
    const url = `${this.proveedoresURL}/proveedores.json?orderBy="nombre"&startAt="${textBusqueda}"&endAt="${textBusqueda}\uf8ff"`
    return this.http.get(url)
      .pipe(
        map(res => res)
      )
  }

}
