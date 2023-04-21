import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer1: footer = {pagina: "Pagina Angular", name: "Ivan Torres Alemany", copyright: "Copyright", ano: 2023};
}

interface footer{
  pagina: string,
  name: string,
  copyright: string,
  ano: number
}
