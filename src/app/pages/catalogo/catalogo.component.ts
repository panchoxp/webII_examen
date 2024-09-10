import { Component, OnInit, inject } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  servicio = inject(LibrosService);
  libros: any[] = [];
  categoriaSeleccionada: string = '';
  rangoSeleccionado: string = '';

  ngOnInit() {
    this.servicio.getLibros().subscribe(libros => {
      this.libros = libros;
    });
  }

  get librosFiltrados() {
    return this.libros.filter(libro => {
      const cumpleCategoria = this.categoriaSeleccionada ? libro.genero === this.categoriaSeleccionada : true;
      const cumpleRango = this.filtrarPorRango(libro.anio);
      return cumpleCategoria && cumpleRango;
    });
  }

  filtrarPorRango(anio: number): boolean {
    if (!this.rangoSeleccionado) {
      return true;
    }

    const [min, max] = this.rangoSeleccionado.split('-').map(Number);
    return anio >= min && anio <= max;
  }
}

