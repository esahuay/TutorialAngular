import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { HttpComponent } from './components/http/http.component';

//Servicios
import { MutantesService } from "././services/mutantes.service";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MutantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
