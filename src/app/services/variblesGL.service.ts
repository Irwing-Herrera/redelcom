import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  showSideMenu = new BehaviorSubject<boolean>(false);

  constructor() { }

}
