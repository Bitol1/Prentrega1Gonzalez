do{
let mostrarMensaje = (mensaje) => alert(mensaje);
let monto = Number(prompt("Ingrese el monto de la compra:"));
if (isNaN(monto) || monto < 0) {
    mostrarMensaje("El monto ingresado no es válido");
} 
else if (monto > 0) {
    let cuotas = Number(prompt("Ingrese la cantidad de cuotas en un rango de 3, 6, 10, 12, 18 y 24 cuotas:"));
    let resultado;
  
switch(cuotas){
     case 3:resultado=(monto/cuotas)*1.101; 
     mostrarMensaje("El monto máximo a pagar en 3 cuotas es de " + resultado);
     break;
     case 6:resultado=(monto/cuotas)*2.078;
     mostrarMensaje("El monto máximo a pagar en 6 cuotas es de " + resultado);
     break;
     case 10:resultado=(monto/cuotas)*2.669;
     mostrarMensaje("El monto máximo a pagar en 10 cuotas es de " + resultado);
     break;
     case 12:resultado=(monto/cuotas)*4.506;
     mostrarMensaje("El monto máximo a pagar en 12 cuotas es de " + resultado);
     break;
     case 18:resultado=(monto/cuotas)*7.379;
     mostrarMensaje("El monto máximo a pagar en 18 cuotas es de " + resultado);
     break;
     case 24:resultado=(monto/cuotas)*10,778;
     mostrarMensaje("El monto máximo a pagar en 24 cuotas es de " + resultado);
     break;
        default:mostrarMensaje("La cantidad de cuotas ingresada no es válida");
    }
}
}while(confirm("¿Desea realizar otra operación?"));
