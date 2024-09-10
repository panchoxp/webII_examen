import { Component } from '@angular/core';
import { LibroListaComponent } from "../libro-lista/libro-lista.component";
import { LibroEditarComponent } from "../libro-editar/libro-editar.component";
import { LibroCrearComponent } from '../libro-crear/libro-crear.component';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [LibroListaComponent,LibroCrearComponent],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {

}
