                       /* el inclede sirve para verificar si el elemneo se encuentra en el array  */


 const Lista = [2,5,9,3,7]

console.log (Lista.includes(5))

                                            /* luego se le puede preguntar en que posiciom se encuentrea  */

console.log (Lista.includes(5,0))


                                                /* los values se pueden ausar para saber los tipos */


let Random = [
    premda = "remera" ,
    precio = 2000,
]


console.log  (Object.values(Random.filter(e => typeof e == "string")))

console.log  (Random.filter(e => typeof e == "string"))


                                                        /* entries sirve para poder sacar el clave valor */

console.log (Object.entries(Random))


                                            /* el paddig sirve para rellenar donde queda las casillas vacias por ejemplo en bacos  */


const pi = "3.123"

console.log (pi)

console.log (pi.padStart (9,"0"))

console.log (pi.padEnd (9,"0"))




                                                            /* propiedades REST Para eliminar o agregasr  */

const jugador = {
    edad: 23,
    nombre : "raul",
    equipo : "almafuerte"  
}



let {nombre , ...info } = jugador
console.log(info)


class Gatos{
    constructor(nombre, edad ){
        this.nombre = nombre 
        this.edad = edad 
    }

    Saludo () {

        console.log("Hola como andasn me llamo " + this.nombre + " y tengo " + this.edad )

    }
}

let Misuki = new Gatos ("MISU", "DOS AÑOS ")

Misuki.Saludo()



const pc = {
    placa : "5060 sm ",
    ram : "8 gb",
    win : " windows 11",
    perifericos : "reddragon"
}



let {win, ...inf } = pc

console.log ("su sistema operativo es " + win )

console.log(Object.entries(pc)) 

                            /* 
                                                                                        el fromEntries hace la inversa */

console.log(Object.fromEntries(Object.entries(pc))) 

console.log(pc)






                                                                        /* el flat te permite apalaarr los terminos del Array  */

const milis = [
    1, 4,[34,343,646], 

]

console.log(milis)

console.log(milis.flat())



                                                                                /* el trim sirve para sacar los espacios  */


const text = "            hola buenas                   "

console.log (text)

let txt = text.trim()


console.log(txt)

                                                                                 /* lo que vas a ver sirve para asignar claves valor privadas  */


class pers {
        #clie 
    constructor (nom,edad){
        this.nom = nom
        this.edad = edad
        this.#clie = 204004342453263535353124357 

    }

    getClie(){
        return this.#clie


    }
    setClie (clie){
        this.#clie = clie
        

    }
}



let lucas = new pers( "lucas ", 23)
console.log (lucas )

console.log (lucas.getClie())
lucas.setClie( "cuenta cancelada " ) 
console.log (lucas.getClie())
