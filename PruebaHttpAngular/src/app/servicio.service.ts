import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
    
  }

  createUser(createForm: FormularioComponent):Observable<FormularioComponent>{
    let url:string = "http://172.17.131.35:8080/users"
    return this.http.post<FormularioComponent>(url,JSON.stringify(createForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }

  updateUser(user: any): Observable<any> {
    const url = `http://172.17.131.35:8080/users/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  deleteUser(userId: number): Observable<any> {
    const url = `http://172.17.131.35:8080/users/${userId}`;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError((err) => {
        console.error('Error al eliminar usuario:', err);
        return throwError(err);
      })
    );
  }

  getUsers() {
    let url:string = "http://172.17.131.35:8080/users"
    return this.http.get(url);
  }


  
}
