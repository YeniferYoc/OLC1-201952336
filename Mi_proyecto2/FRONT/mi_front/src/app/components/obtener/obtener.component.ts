import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/models/analisis';
import { AnalizadoresService } from 'src/app/services/analizadores.service';
import {wasmFolder} from '@hpcc-js/wasm';
import {graphviz } from 'd3-graphviz';
@Component({
  selector: 'app-obtener',
  templateUrl: './obtener.component.html',
  styleUrls: ['./obtener.component.css']
})
export class ObtenerComponent implements OnInit {
  entrada:Entrada={
    entrada: ""
  };
  constructor(private analizar:AnalizadoresService) { }
  errores:any= [];
  variables:any =[];
  consola:string = "";

  
  ngOnInit(): void {/*
    this.servicio_an.getAnalisis().subscribe(
      res => console.log(res),
      err => console.log(err)
    );*/
  }
  enviar_d(){
    var json ={
      entrada:this.entrada.entrada
    }
    
    this.analizar.LeerDatos(json).subscribe(    
      
      (res:any)=> {
        alert("todo bien :) "+res.msg);
        
        this.errores =res.errore;
        console.log(this.errores)
        this.variables = res.entorno;
        console.log(this.variables);
        this.consola = res.consola;
        console.log(this.consola);
        if(res.cod != undefined){
          wasmFolder('../../assets');
          graphviz("#top_gra").renderDot(res.cod).width(18800).height(500);

        }
        //template: this.errores
        
        //document.getElementById("dis_pila").innerHTML=this.errores;
      console.log(res);
    },
    err => console.log(err)
);
    console.log(this.entrada.entrada)
  }

}
