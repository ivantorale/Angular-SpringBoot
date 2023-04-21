import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { BodyComponent } from './body/body/body.component';
import { ResultadosComponent } from './resultados/resultados/resultados.component';
import { CampoComponent } from './campo/campo/campo.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    ResultadosComponent,
    CampoComponent,
    FormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FormularioComponent]
})
export class AppModule { 

}

