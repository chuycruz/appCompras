import { Component, OnInit } from '@angular/core';

import { auth } from 'firebase/app';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: any

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
