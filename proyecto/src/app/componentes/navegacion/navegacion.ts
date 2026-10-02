import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'app-navegacion',
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css',
})
export class Navegacion {
  enlaces = signal([
    { label: 'Inicio', activo: true },
    { label: 'Colección', activo: false },
    { label: 'Pruebas Virtuales', activo: false },
    { label: 'Acerca de', activo: false },
  ]);
}
