import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objectos :Array<Imprimivel>){
    for(let objeto of objectos){
        console.log(objeto.paraTexto());
    }
}