// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Meine Webseite</h1>
      <nav>
        <a routerLink="/home">Home</a>
        <a routerLink="/about">About</a>
        <a routerLink="/contact">Contact</a>
      </nav>
    </div>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'meine-webseite';
}
