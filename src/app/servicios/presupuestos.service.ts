import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {map, delay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  private pressURL = 'https://appcompras-43e8a.firebaseio.com'
  private preURL = 'https://appcompras-43e8a.firebaseio.com/presupuesto'

  constructor(private http: HttpClient) { }

  postPresupuesto(presupuesto: any){
    /*const newPresupuesto = JSON.stringify(presupuesto)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post(this.pressURL, newPresupuesto, {headers}).pipe(
      map((respuesta: any) => {
        console.log(respuesta.json())
        return respuesta.json
      }))*/ 
  

    return this.http.post(`${ this.pressURL}/presupuesto.json`, presupuesto)
      .pipe(
        map((resp: any) => {
          console.log(resp)
          presupuesto.id = resp.name
          return presupuesto
        })
      ) 
  }

  getPresupuestos(){
    return this.http.get(`${ this.pressURL}/presupuesto.json`)
      .pipe(
        map(resp => resp)
      )
  }

  getPresupuesto(id: string){
   const url = `${this.preURL}/${id}.json`;
    return this.http.get(url)
    .pipe(
      map(resp => resp)
    )
     /*return this.http.get(`https://appcompras-43e8a.firebaseio.com/presupuesto/${id}.json`)*/
  }

  putPresupuesto(presupuesto:any, id: string){
    const url = `${this.preURL}/${id}.json`
    const newPre = JSON.stringify(presupuesto)
    /*const headers = new HttpHeaders()
    .append(
      'Content-Type', 'application/json'
    )*/

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    return this.http.put(url, newPre, {headers})
      .pipe (
        map( resp => {
          console.log(resp)
          return resp
        })
      )
    
  /*return this.http.put(`https://appcompras-43e8a.firebaseio.com/presupuesto/${id}.json`, presupuesto)*/
  }

  borrarPresupuesto(id: string){
    return this.http.delete(`${this.preURL}/${id}.json`)
  }
}