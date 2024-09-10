import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private API_USUARIOS = "http://localhost:3000/login";
  
  constructor(private http: HttpClient) { }

  postlogin(user: { email: string, password: string }): Observable<any> {
    return this.http.post(this.API_USUARIOS, user);
  }
}

