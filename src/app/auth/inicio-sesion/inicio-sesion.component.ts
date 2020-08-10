import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  loginForm: FormGroup
  userData: any
  mensaje: boolean = false

  autenticando = false

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    })
  }

  onSubmit(){

    this.autenticando = true
    this.userData = this.saverUserdata()
    this.auth.inicioSesion(this.userData)
    
    setTimeout(()=>{
      if(this.isAuth()===false){
        this.mensaje = true
        this.autenticando = false
      }
    },2000)
  }

  saverUserdata(){
    const saverUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }

    return saverUserdata
  }

  isAuth() {
    return this.auth.isAutenticated()
  }

}
