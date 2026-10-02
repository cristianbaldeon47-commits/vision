import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.html',
  styleUrl: './caracteristicas.css',
})
export class Caracteristicas {
  filtros = signal([
    { label: 'Innovación',          activo: false },
    { label: 'Rendimiento Serie',   activo: false },
    { label: 'Alta definición',     activo: true  },
    { label: 'Lentes antirreflejo', activo: false },
    { label: 'Lentes inteligentes', activo: false },
  ]);
}
