import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/inicio" routerLinkActive="active">Inicio</a> |
      <a routerLink="/formulario" routerLinkActive="active">Formulario</a> |
      <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'mi-proyecto-guards';
}