import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  user: User[] = [];

  constructor(private http: ServicioService, private servicioService : ServicioService) { }
  ngOnInit(): void { 
    this.servicioService.getUsers().subscribe((data: Object) => {
      this.user = data as User[];
    }, error => {
      console.error(error);
    });
  }

  onUpdateUser() {
    const updatedUser = this.CreateForm.value;
    this.servicioService.updateUser(updatedUser).subscribe(result => {
      console.log('Usuario actualizado:', result);
      // Aquí puedes realizar alguna acción adicional, como actualizar la lista de usuarios
    }, error => {
      console.error('Error al actualizar el usuario:', error);
    });
  }

  onDelete() {
    const id = this.CreateForm.controls['id'].value;
    this.servicioService.deleteUser(id).subscribe(
      () => {
        console.log('Usuario eliminado');
      },
      error => {
        console.log(error);
      }
    );
  }

  createUser() {
    this.http.createUser(this.CreateForm.value).subscribe(data => {
      console.log(this.CreateForm)
    })
  }
  id: FormControl = new FormControl('', Validators.required);
  name: FormControl = new FormControl('', Validators.required);
  email: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]);
  last_name: FormControl = new FormControl('', Validators.required);
  age: FormControl = new FormControl('', Validators.required);
  quota: FormControl = new FormControl('', Validators.required);

  CreateForm: FormGroup = new FormGroup({
    id: this.id,
    age: this.age,
    email: this.email,
    name: this.name,
    quota: this.quota,
    last_name: this.last_name
  });

}
export interface User {
  id: number,
  name: string,
  last_name: string,
  email: string,
  age: number,
  quota: number,
}
