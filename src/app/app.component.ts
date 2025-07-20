import { Component } from '@angular/core';
import { ApologyComponent } from './apology/apology.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApologyComponent],
  template: `<app-apology></app-apology>`
})
export class AppComponent {}
