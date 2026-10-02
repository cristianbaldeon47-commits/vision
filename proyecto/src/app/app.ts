import { Component } from '@angular/core';
import { Navegacion }     from './componentes/navegacion/navegacion';
import { Portada }        from './componentes/portada/portada';
import { Caracteristicas }from './componentes/caracteristicas/caracteristicas';
import { Opiniones }      from './componentes/opiniones/opiniones';

@Component({
  standalone: true,
  imports: [Navegacion, Portada, Caracteristicas, Opiniones],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
