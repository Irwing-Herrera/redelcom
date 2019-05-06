import { Component, OnInit, HostListener } from '@angular/core';
import { fadeAnimation } from '../shared/animations/fade';
import { VariablesService } from '../services/variblesGL.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [fadeAnimation]
})
export class PagesComponent implements OnInit {

  showSideMenu: boolean;
  contador: number = 0;

  constructor(
    private variables: VariablesService
  ) {

    this.variables.showSideMenu.subscribe(value => {
      this.showSideMenu = value;
      this.contador = 0;
    });

    window.onscroll = function () { changueColorNav() };
    function changueColorNav() {
      let nav = document.getElementById("sideNav");
      let logo = document.getElementById("logo");
      var width = window.innerWidth;
      nav.style.transition = "background-color 500ms linear";
      nav.style.backgroundColor = "rgba(0,0,0,0.6)";
      logo.style.transition = "500ms linear";
      
      if (width == 1440 || width == 1500 || width == 1644) {
        let menuMobile = document.getElementById("menu-mobile");
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
          menuMobile.style.transition = "500ms linear";
          
          nav.style.height = "28vh";
          
          menuMobile.style.left = "80rem";
          menuMobile.style.top = "1rem";

          logo.style.top = "3rem";
          logo.style.left = "7rem";
          logo.style.width = "150vw";
          logo.style.height = "18vh";
        }
        else {
          nav.style.backgroundColor = "rgba(0,0,0,0)";

          menuMobile.style.left = "69rem";
          menuMobile.style.top = "4rem";

          logo.style.top = "5rem";
          logo.style.left = "14rem";
          logo.style.width = "220vw";
          logo.style.height = "26vh";
        }
      }
      else {
        if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
          nav.style.height= "56px";

          logo.style.top = "1rem";
          
          if (width == 1366) {
            logo.style.width = "9vw";
            logo.style.height = "4vh";
          }
          else {
            logo.style.width = "7vw";
            logo.style.height = "3vh";
          }

        } else {
          nav.style.backgroundColor = "rgba(0,0,0,0)";

          logo.style.top = "1rem";
          logo.style.width = "15vw";
          logo.style.height = "6vh";
          // nav.removeAttribute("style")
        }
      }
    }
  }

  ngOnInit() {
  }

  //#region Modales
  clickSides($event: Event) {
    $event.preventDefault(); // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
    $event.stopPropagation();  // Evita la propagación adicional del evento actual en las fases de captura y bubbling
  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.showSideMenu && this.contador == 0) {
      this.showSideMenu = true;
      this.contador++;
    }
    else if (this.showSideMenu && this.contador == 1) {
      this.showSideMenu = false;
      this.contador = 0;
    }
  }
  //#endregion
}
