import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup
  userData: any

  erroresForm = {
    'email': '',
    'password': ''
  }

  mensajesValidacion = {
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca un correo electrónico correcto'
    },
    'password': {
      'required': 'Contraseña obligatoria',
      'pattern': 'La contraseña debe contener al menos un número y una letra',
      'minlength': 'y más de 6 caracteres'
    }
    
  }

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    })

    this.registroForm.valueChanges.subscribe(data => this.onValueChanged(data))
    this.onValueChanged()
  }

  onSubmit(){
    this.userData = this.saverUserdata()
    this.auth.registroUsuario(this.userData)
    this.router.navigate(['/inicio'])
    
  }

  saverUserdata(){
    const saverUserdata = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }

    return saverUserdata
  }

  onValueChanged(data?: any){
    if(!this.registroForm) {
      return
    }

    const form = this.registroForm

    for(const field in this.erroresForm){
      this.erroresForm[field] = ''
      const control = form.get(field)
      
      if(control && control.dirty && !control.valid){
        const messages = this.mensajesValidacion[field]

        for(const key in control.errors){
          this.erroresForm[field] += messages[key] + ' '
        }
      }
    }
  }

}
