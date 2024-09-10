import { Component, inject, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
  servicio = inject(LibrosService);
  libros: any[] = [];

  ngOnInit() {
    this.servicio.getLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

  eliminar(id: any): void {
    this.servicio.deleteLibros(id).subscribe(() => {
      this.libros = this.libros.filter(libro => libro.id !== id);
    });
  }
}

