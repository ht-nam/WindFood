import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/auth/login/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  currentRole?: number;

  isLoggin():boolean{
    return localStorage.getItem('token') !== null;
  }

  getCurrentUser(){
    this.service.getCurrentUser().subscribe(
      value => {
        // ADMIN
        this.currentRole = value?.role
      }
    )
  }

  constructor(private router: Router, private service: LoginService){

  }

  ngOnInit(){
    if(!localStorage.getItem('token')){
      this.router.navigate(['login'])
    }
  }

  getBodyClass(): string{
    let styleClass = 'body';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = "body-md-screen";
    }
    return styleClass;
  }
}
