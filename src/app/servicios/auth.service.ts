import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router, ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  registroUsuario(userData){
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
      .catch(error => {
        console.log(error)
      })
  }

  inicioSesion(userData){
    firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
      .then(respuesta => {
        console.log(respuesta)
        this.router.navigate(['/inicio'])
      }).catch(error => console.log(error))
  }

  isAutenticated(){
    const user = firebase.auth().currentUser
    if (user) {
      return true
    } else {
      return false
    }
  }

  logout(){
    firebase.auth().signOut()
  }
}
