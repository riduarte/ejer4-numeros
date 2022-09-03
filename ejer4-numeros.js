//- Una variable que contenga tu altura en centímetros (entero)
let altura= 1.76 * 100
//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaCm = parseFloat(1.76)
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = parseFloat(76.7)
//- Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeo =  Math.round(1.76)
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeo = Math.floor(76.7)
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
isJs = (Number.MAX_VALUE + 1 === Number.MAX_VALUE )

console.log(altura,alturaCm,pesoKg,alturaRedondeo,pesoRedondeo, isJs)