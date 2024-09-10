import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;
  role: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verificamos si el usuario está autenticado y su rol
    this.isAuthenticated = sessionStorage.getItem('login') === 'true';
    this.role = sessionStorage.getItem('role');    
  }

  logout(): void {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }
}

