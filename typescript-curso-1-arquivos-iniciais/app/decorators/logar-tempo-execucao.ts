export function logarTempoDeExecucao(){
    return function(
        target: any, //isso informa que pode vir qualquer coisa, uma classe ou metodo
        propertyKey: string,//nome do metodo
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args:Array<any>){
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} tempo de execução: ${(t2 - t1)/1000} em segundos.`);
            retorno
        }

        return descriptor;
    }
}