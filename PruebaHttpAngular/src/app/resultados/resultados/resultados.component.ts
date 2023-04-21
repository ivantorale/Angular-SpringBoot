import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  resultados = Resultados;
}

var Resultados=[{
  dia: "DOM. 12 FEB.",
  liga:"LaLiga",
  local:"Villareal",
  escudolocal:"/assets/img/escudo/1.png",
  resultado:"0 - 1",
  escudovisitante:"assets/img/esudo.png",
  visitante:"FC Barcelona"
},{
  dia: "DOM. 12 FEB.",
  liga:"LaLiga",
  local:"FC Barcelona",
  escudolocal:"assets/img/esudo.png",
  resultado:"3 - 0",
  escudovisitante:"assets/img/escudo/2.png",
  visitante:"Sevilla"
},{
  dia: "DOM. 12 FEB.",
  liga:"LaLiga",
  local:"Real Betis",
  escudolocal:"assets/img/escudo/betis.png",
  resultado:"1 - 2",
  escudovisitante:"assets/img/esudo.png",
  visitante:"FC Barcelona"
},{
  dia: "DOM. 12 FEB.",
  liga:"LaLiga",
  local:"Girona",
  escudolocal:"assets/img/escudo/girona.png",
  resultado:"0 - 1",
  escudovisitante:"assets/img/esudo.png",
  visitante:"FC Barcelona"
}
]
