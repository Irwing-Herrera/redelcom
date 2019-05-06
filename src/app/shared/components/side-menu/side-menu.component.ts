import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/app/services/variblesGL.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(
    private variables: VariablesService
  ) { }

  ngOnInit() {
  }

  navegar(navegar: string) {
    let div = document.getElementById(navegar);
    this.variables.showSideMenu.next(false);
    div.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
