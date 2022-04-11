import {factura} from './src/facturas.js'

console.log("------------estoy en index------------");
console.log("------------Muestro array------------");
console.log(factura,factura.length);
console.log("------------ForEach------------");
factura.forEach(function(element){
    if(element.numero>20){
        console.log(element);
    }
    
})

console.log("------------ordeno sort------------");

const facturaOrdenada = factura.sort((b,a)=>a.importe-b.importe);
console.log(facturaOrdenada);

console.log("------------filtro filter------------");

const facturaFiltrada = factura.filter(f => f.importe>2000);
console.log(facturaFiltrada);

console.log("------------map------------");
const nueFact = factura.map(function(datos){
    return {num:datos.numero,imp:datos.importe}
});
console.log(nueFact);

