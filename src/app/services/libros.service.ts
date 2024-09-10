import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) { }
  private API_LIBROS= 'http://localhost:3000/libros'

  getLibros(): Observable<any> {
    return this.http.get(this.API_LIBROS)
  }
  getLibrosID(id: any):Observable<any>{
    return this.http.get(`${this.API_LIBROS}/${id}`)//traer un unico elemento, mas facil asi
  }

//post
postLibros(item: any): Observable<any> {
  return this.http.post(this.API_LIBROS, item)
}
//put-editar
putLibros(item:any): Observable<any> {
  return this.http.put(`${this.API_LIBROS}/${item.id}`,item)
  //return this.http.put(this.API_PRODUCTO+"/"+item.id,item)
}

//DELETE
deleteLibros(id:any):Observable<any>{
  return this.http.delete(`${this.API_LIBROS}/${id}`)
}
}
