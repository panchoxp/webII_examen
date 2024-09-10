import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { LibroEditarComponent } from './pages/libro-editar/libro-editar.component';
import { LibroListaComponent } from './pages/libro-lista/libro-lista.component';
import { LibroCrearComponent } from './pages/libro-crear/libro-crear.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/usuarios.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prestamos', component: PrestamosComponent, canActivate: [authGuard], data: { roles: ['Librarian', 'Admin'] } },
  { path: 'catalogo', component: CatalogoComponent, canActivate: [authGuard], data: { roles: ['Librarian', 'Admin'] } },
  { path: 'gestionLibros', component: GestionLibrosComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'gestionUsuarios', component: GestionUsuariosComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'editarLibros/:idLibro', component: LibroEditarComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'listaLibro', component: LibroListaComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'crearLibro', component: LibroCrearComponent, canActivate: [authGuard], data: { roles: ['Admin'] } },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];
