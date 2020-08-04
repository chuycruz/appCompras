import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['/inicio-de-sesion'])
  }

  isAuth() {
    return this.auth.isAutenticated()
  }

}
