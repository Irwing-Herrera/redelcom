import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variblesGL.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showSideMenu: boolean;

  constructor(    
    private variables: VariablesService
  ) {}

  ngOnInit() {
    this.showSideMenu = this.variables.showSideMenu.value;
  }

  navegar(navegar: string){
      let div = document.getElementById(navegar);
      div.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  openMenu(){
    this.variables.showSideMenu.next(true);
  }
}
