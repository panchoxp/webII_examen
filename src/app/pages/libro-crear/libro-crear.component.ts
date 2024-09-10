import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-libro-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css']
})
export class LibroCrearComponent {
  titulo: string | undefined;
  autor: string | undefined;
  genero: string | undefined;
  anio: number | undefined;
  imagen: string | undefined;
  descripcion: string | undefined;

  private librosService = inject(LibrosService);

  guardarLibro(formulario: any) {
    if (formulario.valid) {
      const nuevoLibro = {
        titulo: this.titulo,
        autor: this.autor,
        genero: this.genero,
        anio: this.anio,
        imagen: this.imagen,
        descripcion: this.descripcion
      };

      this.librosService.postLibros(nuevoLibro).subscribe({
        next: (response) => {
          console.log('Libro guardado', response);
          alert('Libro guardado exitosamente');
          window.location.href = "gestionLibros"; // redirigir después de guardar
        },
        error: (err) => {
          console.error('Error al guardar libro', err);
          alert('Hubo un error al guardar el libro');
        }
      });
    }
  }
}

