// app.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Meine Webseite</h1>
      <nav>
        <a [routerLink]="['home']">Home</a>
        <a [routerLink]="['about']">About</a>
        <a [routerLink]="['contact']">Contact</a>
      </nav>
    </div>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule, RouterModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meine-webseite';
}
