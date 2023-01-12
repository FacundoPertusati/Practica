/* CLASES}let lista = [2,3,4]
  /* let multipliocado = lista.map (function (e){
   return e *2
 })
console.log(lista);
console.log(multipliocado);
*/
const multi = (e)=>{
  return  e* 2
}

let lista2 = lista.map (multi)
console.log(lista);
console.log(lista2)



const mul3= (e)=>{ 

   return e * 3 
}
let lista4 = lista2.map (mul3)
console.log(lista4)
 
 /* const filteer = (e)=>{

  return e > 20

}*/
let lista5 = lista4.filter( e=> e > 20)

console.log(lista5)


                                            /* PROTOTYPE}*/
const nombre = "aquiles" 
const edad = "8 años "
const raza = "dogo"


function perro (nombre , raza , edad ){
  this.nombre = nombre
  this.raza = raza 
  this.edad = edad 
}
 
let roma = new perro ( nombre, edad, raza)

console.log(roma)

perro.prototype.saludo =  ()=> {
  console.log( "HOLA SOY ", nombre )}

roma.saludo();


/* CLASES}*/


class Prenda {
  constructor(tipo , color , talle , marca ){
    this.tipo = tipo;
    this.color = color ;
    this.talle = talle ; 
    this.marca = marca ;
  }
  confirmacion () {
    console.log( "SU pedido de remera " , this.marca, "esta en camino")
    
   }

   Rechazo (){
    console.log ( "su pedido se rechazo")
   }

}
let pedido = new Prenda("SUPERIOR ", "BLANCO" , "L", "NIKE ")

console.log(pedido)


pedido.Rechazo()