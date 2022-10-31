

const user = "diego_08";
const pass_comprador = "diego1234";


function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();


    }else{


        alert("Usuario y/0 contraseña invalida");



    }




}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_comprador ){


        return true ;

    }else {


        return false ;

    }





}


function iniciarCarrito(){


    let lista = "" ;

    let finalizar_carrito = false ;


    while (!finalizar_carrito){


        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);


        if (producto){

            alert("producto agregado con exito :"+producto);
            lista += "\n"+producto;


        }else{

            if (cod === null){

                finalizar_carrito = true ;


            }else {


                alert("Ingrese un codigo de producto valido");
            
            }

        }

    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
        if (resp){

            alert("Gracias por comprar en nuestra tienda online");


        }


    }








}




function obtenerProducto(cod){ 


    let producto  ;
    switch(cod){

        case "001" : 
                    producto ="Procesador AMD Ryzen 5 5500";
                    break;
        case "002" : 
                    producto = "Procesador Intel Core i5-10400F";
                    break;
        case "003" : 
                    producto = "Motherboard Gigabyte GA-A320M-H Socket AM4" ;
                    break;
        case "004" : 
                    producto = "Motherboard Gigabyte H110M - S2H Socket 1200";
                    break;       
        case "005" : 
                    producto = "Disco Duro HDD Western Digital Caviar green 3TB SATA III" ;
                    break;

        case "006" : 
                    producto = "Disco Sólido SSD Kingston A400 240GB SATA III" ;
                    break;
        case "007" : 
                    producto = "Disco Sólido SSD Kingston SA400M8 400GB M.2 NVMe";
                    break;
        case "008" : 
                    producto = "DISCO SOLIDO SSD 256GB ADATA M2 NVME SPECTRIX XPG S40G RGB 3500MB/S" ;
                    break;
        case "009" : 
                    producto = "Placa de video Sapphire AMD Radeon RX 6650 XT Pulse 8GB GDDR6"
                    break;       
        case "010" : 
                    producto = "Gabinete Gigabyte C200 Glass" ;
                    break;

        case "011" : 
                    producto = "Gabinete XTech XTQ-100" ;
                    break;                        
        

         default :
                    producto = false;          

    }



   return producto ;  



}





document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});


let: productos;





function consulta(nombre, email, celular) {
    this.nombre = nombre;
    this.email = email;
    this.celular = celular;
}

const consulta1 = new consulta("Diego, diego_alta2008@hotmail.com, 3517707347");
const consulta2 = new consulta ("Carina, cariro-98@hotmail.com, 3516771957");
const consulta3 = new consulta("Monica, monibeatriz45@outlook.com, 35166771965");

 alert("Ingresa tus datos y te contactaremos");



class productos{
    constructor(nombre, precio){
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
        this.vendido=false;
        
    }
}

const producto1 = new productos ("Memoria Ram ddr4 4gb", "$5300");
const producto2 = new productos("lectograbadora dvd", "$1900");
const producto3 = new productos ("Placa de wifi-tplink", "$3250");

console.log(productos.producto1);



let resultado

function sumar(producto1, producto2){
    resultado= producto1+producto2
}







