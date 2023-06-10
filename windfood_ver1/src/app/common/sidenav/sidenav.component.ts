import { Component, EventEmitter, Output } from '@angular/core';
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

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  }
}
