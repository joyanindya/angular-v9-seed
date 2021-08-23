import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {

  getTitle() : string{
    return 'Welcome To Angular Seed,';
  }

  constructor() { }
}
