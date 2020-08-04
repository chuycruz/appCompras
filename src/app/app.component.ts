import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD-3ObXEFYTq61hA1d6RWhA3fuqEfQokjE",
      authDomain: "appcompras-43e8a.firebaseapp.com",
      databaseURL: "https://appcompras-43e8a.firebaseio.com",
      projectId: "appcompras-43e8a",
      storageBucket: "appcompras-43e8a.appspot.com",
      messagingSenderId: "686187638630",
      appId: "1:686187638630:web:2b23532884adc6a2aaa2a7"
    })
  }

  isAuth() {
    return this.auth.isAutenticated()
  }
}
