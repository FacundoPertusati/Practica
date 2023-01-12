const depositado= 200
class venta {
    constructor(talle,prenda,color, precio) {
        this.talle = talle;
        this.prenda = prenda;
        this.color = color ;
        this.precio = precio

    }
    confirmacion(){
        if (this.precio === depositado){
            console.log ("su " + this.prenda + " esta en camino")

        }

        else {
            console.log ("RECHAZO EL PEDIDO")
        }
    }

}

const pedido = new venta ("M","REMERA", "VERDE",2000)

console.log(pedido)
pedido.confirmacion ();

