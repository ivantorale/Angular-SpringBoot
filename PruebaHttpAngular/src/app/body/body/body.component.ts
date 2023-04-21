import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  deportista1:string[]=["Pedro","Sergi","Kevin","Ivan"];
  columnas:string[]=["Foto","Nombre","Posicion","Numero","Salario"];
  tabla = Tabla;
  imageSrc = 'assets/img/campo.jpg'
}

var Tabla = [
  {
    Foto:"assets/img/jugadores/1.webp",
    Nombre: "Marc-André ter Stegen",
    Posicion:"Portero",
    Numero:"1",
    Salario:"1.392.373€"
  },
  {
    Foto:"assets/img/jugadores/2.webp",
    Nombre: "Ronald Araujo",
    Posicion:"Defensa",
    Numero:"4",
    Salario:"2.826.341€"
  },
  {
    Foto:"assets/img/jugadores/3.webp",
    Nombre: "Andreas Christensen",
    Posicion:"Defensa",
    Numero:"15",
    Salario:"1.091.726€"
  },
  {
    Foto:"assets/img/jugadores/4.webp",
    Nombre: "Marcos Alonso",
    Posicion:"Defensa",
    Numero:"17",
    Salario:"1.660.393€"
  },
  {
    Foto:"assets/img/jugadores/5.webp",
    Nombre: "Sergio Busquets",
    Posicion:"Centrocampista",
    Numero:"5",
    Salario:"1.868.094€"
  },
  {
    Foto:"assets/img/jugadores/6.webp",
    Nombre: "Gavi",
    Posicion:"Centrocampista",
    Numero:"6",
    Salario:"1.483.036€"
  },
  {
    Foto:"assets/img/jugadores/7.webp",
    Nombre: "Pedri",
    Posicion:"Centrocampista",
    Numero:"8",
    Salario:"5.737.306€"
  },
  {
    Foto:"assets/img/jugadores/8.webp",
    Nombre: "Frenkie de Jong",
    Posicion:"Centrocampista",
    Numero:"21",
    Salario:"7.416.898€"
  },
  {
    Foto:"assets/img/jugadores/9.webp",
    Nombre: "Robert Lewandowski",
    Posicion:"Delantero",
    Numero:"9",
    Salario:"4.068.074€"
  },{
    Foto:"assets/img/jugadores/10.webp",
    Nombre: "Ousmane Dembélé",
    Posicion:"Delantero",
    Numero:"7",
    Salario:"5.962.337€"
  },
  {
    Foto:"assets/img/jugadores/11.webp",
    Nombre: "Ferran Torres",
    Posicion:"Delantero",
    Numero:"11",
    Salario:"7.680.844€"
  },
]

