import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class MutantesService {

  mutantes:any[] = [];
  
  constructor(private http:Http) { 
    console.log("Servicio muntantes listo.");
    this.cargar_mutantes();
  }

  cargar_mutantes()
  {
    this.http.get("assets/data/mutantes.json")
    .subscribe(
      respuesta => {
        let data = respuesta.json();
        console.log(data);
        this.mutantes = data.mutantes;
      });
  }
  
}
