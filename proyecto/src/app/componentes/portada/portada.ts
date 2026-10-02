import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface Avatar {
  src: string;
  alt: string;
}

@Component({
  standalone: true,
  imports: [MatButtonModule],
  selector: 'app-portada',
  templateUrl: './portada.html',
  styleUrl: './portada.css',
})
export class Portada {
  avatares = signal<Avatar[]>([
    { src: '/ch2.jpg', alt: 'Cliente 1' },
    { src: '/h3.jpg',  alt: 'Cliente 2' },
    { src: '/h4.jpg',  alt: 'Cliente 3' },
  ]);
}
