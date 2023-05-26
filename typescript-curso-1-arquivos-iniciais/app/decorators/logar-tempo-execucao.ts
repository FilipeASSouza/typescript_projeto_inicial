export function logarTempoDeExecucao(emSegundos:Boolean = false){
    return function(
        target: any, //isso informa que pode vir qualquer coisa, uma classe ou metodo
        propertyKey: string,//nome do metodo
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args:Array<any>){
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} tempo de execução: ${(t2 - t1)/divisor} em ${unidade}.`);
            retorno
        }

        return descriptor;
    }
}