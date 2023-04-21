import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body/body.component';
import { ResultadosComponent } from './resultados/resultados/resultados.component';
import { CampoComponent } from './campo/campo/campo.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: FormularioComponent},
  {path: 'jugadores', component: BodyComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'campo', component: CampoComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulariodos', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
