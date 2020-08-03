import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup
  userData: any

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]]
    })
  }

  onSubmit(){
    this.userData = this.saverUserdata()
    this.router.navigate(['/inicio'])
    
  }

  saverUserdata(){
    const saverUserdata = {
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password').value
    }

    return saverUserdata
  }

}
