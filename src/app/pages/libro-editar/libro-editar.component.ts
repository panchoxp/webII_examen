import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibrosService } from '../../services/libros.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-libro-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libro-editar.component.html',
  styleUrls: ['./libro-editar.component.css']
})
export class LibroEditarComponent {
  id: any;
  titulo: string = "";
  autor: string = "";
  genero: string = "";
  anio: number = 0;
  imagen: string = "";
  descripcion: string = "";

  ruta = inject(ActivatedRoute);
  servicio = inject(LibrosService);

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      let id = params['idLibro'];
      console.log('ID del libro:', id); 
      this.servicio.getLibrosID(id).subscribe(libro => {
        this.id = libro.id;
        this.titulo = libro.titulo;
        this.autor = libro.autor;
        this.genero = libro.genero;
        this.anio = libro.anio;
        this.imagen = libro.imagen;
        this.descripcion = libro.descripcion;
      });
    });
  }

  editar(data: NgForm) {
    const libro = data.value;
    libro.id = this.id;
    this.servicio.putLibros(libro).subscribe(() => {
      alert("Libro editado");
      window.location.href = "gestionLibros";
    });
  }
}

