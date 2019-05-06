import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation],
})

export class HomeComponent implements OnInit {

  header: number = 0;
  maxHeader: number = 2;
  intervalo: any = null;

  constructor() { }

  ngOnInit() { }

  navegar(navegar: string) {
    let div = document.getElementById(navegar);
    div.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
