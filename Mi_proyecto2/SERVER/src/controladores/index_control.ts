import { Request, Response } from "express";
import { Error_det } from "../Grammar/Error_det";
import { Mi_var } from "../Grammar/Mi_var";
import { Tabla_s } from "../Grammar/Tabla_s";
import { Union } from "../Grammar/Union";
import {join } from "path";
import {exec } from "child_process"


class ApiController {
  public async funcion1(req: Request, res: Response) {
    console.log("funiona comu")
    try {
      res.json({ msg: "hola mundo!" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async leer_entrada(req: Request, res: Response) {

    //const {entrada} = req.body.entrada;
    let entr = req.body.entrada;
    console.log(req.body.entrada);

    console.log("entor post ")
    //console.log(entr+"   ffffffffffffffffffffffffffffff");
    let errores:Error_det []= [];
    let codigo_dot:string = "";
    let entorno: Mi_var[] = [];
    let consola:string ="";
    try {
        const parser = require('../Grammar/Gramatica.js');
        const fs = require('fs');

        try {
    
            if (true) {
                
                //const entrada = fs.readFileSync('./src/entrada.txt');
                                     
                const s= Union.getInstance();
                s.clear_ast()
                s.clear_entorno()
                s.clear_error()
                s.clear_consola()
                const ast = parser.parse(entr);
                const tabla = new Tabla_s(null);
                tabla.clear_entorno()
                console.log("errres ----- -------------------------------------------")
                errores = s.get_error();
                for (let index = 0; index < errores.length; index++) {
                 errores[index].obtener_error();
                 
                }
                //s.add_ast(`nodeOriginal[label="<\\Lista_Instrucciones\\>"];`)
                let  dot_:string = "";
                dot_ += "digraph G {node[shape=box, style=filled, color=\"#e43c5c\"]; edge[color=\"#e43c5c\"];rankdir=UD \n";
                dot_+="raiz"+" [ label =\"INICIO\"];\n";
                //s.add_ast(dot)
                //generar el ast primero
                for (const instr of ast) {
                  try {
                      //s.add_ast(`raiz->`)
                      dot_+= (`raiz->`);
                      dot_ += instr.ast();
                      
      
                  } catch (error) {
                  }
              }
              dot_+= "hola\n"
              dot_ += "}";
              console.log(dot_);
              codigo_dot = dot_;
              
              
              
                    for (const instr of ast) {
                        try {
                            //s.add_ast(`raiz->`)
                            
                             instr.ejecutar(tabla);
                            
            
                        } catch (error) {
                        }
                    }

                    
                  entorno = tabla.getEntorno();
                  console.log("+9999999999999999999999999999999999999")
                  for (let index = 0; index < entorno.length; index++) {
                    entorno[index].obtener_error();
                    
                   }
                  console.log("+9999999999999999999999999999999999999")
                   // let cad:string =  s.get_ast();
                   
                   consola = s.get_consola();
                   console.log(s.get_consola());
                  /* s.get_error().forEach(element => {
                    element.obtener_error();
                    
                   });*/
                 //   console.log(s.get_error());

                    
                
                
            }
        }
        catch (error) {
            console.log(error);
        }
        
        
                    console.log("ola")


      res.send({ msg: "hola mundo " + req.body.entrada,
      errore: errores,
      entorno: entorno,
      consola: consola,
      cod: codigo_dot
    
    });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion3(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo " + req.params.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }

  public async funcion4(req: Request, res: Response) {
    try {
      res.json({ msg: "hola mundo " + req.headers.nombre });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion" });
    }
  }
}

export const apiController = new ApiController();