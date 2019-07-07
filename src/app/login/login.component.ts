import { Component, OnInit } from '@angular/core';
import {MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:MyserviceService) { }

  ngOnInit() {
    this.service.sayHello("Login");
  }

}
