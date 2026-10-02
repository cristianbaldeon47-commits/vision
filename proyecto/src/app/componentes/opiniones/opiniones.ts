import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Opinion {
  titulo: string;
  resena: string;
  autor: string;
  imagen: string;
}

interface EnlacePie {
  label: string;
}

@Component({
  standalone: true,
  imports: [MatCardModule],
  selector: 'app-opiniones',
  templateUrl: './opiniones.html',
  styleUrl: './opiniones.css',
})
export class Opiniones {
  opiniones = signal<Opinion[]>([
    {
      titulo: 'CLIENTES DE TODO EL MUNDO',
      resena: '"La calidad visual es increible, se nota la diferencia desde el primer dia."',
      autor: '— Mateo R.',
      imagen: '/ch5.jpg',
    },
    {
      titulo: 'RENDIMIENTO REAL',
      resena: '"Comodidad, estilo y tecnologia en un solo producto."',
      autor: '— Valentina S.',
      imagen: '/h4.jpg',
    },
    {
      titulo: 'DISENADOS PARA EL FUTURO',
      resena: '"Mas que lentes, es una experiencia de vision."',
      autor: '— Diego L.',
      imagen: '/h5.jpg',
    },
  ]);

  enlacesPie = signal<EnlacePie[]>([
    { label: 'Inicio' },
    { label: 'Colección' },
    { label: 'Pruebas Virtuales' },
    { label: 'Acerca de' },
  ]);
}
