import { Env } from "./symbols/env";

const parser = require("./grammar/grammar");
const fs = require("fs");

try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env= new Env(null);

    for (const instruccion of ast) {
        try {
            instruccion.ejecutar(env);
        } catch (error) {
            console.log(error);
            
        }
    }

    
    
} catch (error) {
    console.log(error);
    
}