import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/components/auth/login/login.service';
import { navbarData } from 'src/app/navigation';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  screenWidth = 0;

  collapsed = false;

  navData = navbarData;

  currentRole?: number;
  
  cartLength?: number = 0;

  constructor(private router: Router, 
    private service: LoginService,
    ){
  }

  ngOnInit(){
    
    let retrievedString = localStorage.getItem("products");

    // Convert the string back into an array object
    let retrievedObject = JSON.parse(retrievedString!)?.length;

    // Log the retrieved array object
    this.cartLength = retrievedObject; 
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  getCurrentRole(){
    return localStorage.getItem('role');
  }

  isLoggin():boolean{
    return !!localStorage.getItem('token');
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  signOut(){
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
