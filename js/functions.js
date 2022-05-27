function saludo(){
    alert("HOLA MUNDO ESTO ES JS")
}

function suma(){
    var A;
    var B;
    var SUMA;

    alert("ESTE SISTEMA REALIZA UNA SUMA CON 2 VALORES INGRESADOS POR EL USUARIO");

    A = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
    B = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));

    SUMA = A + B;

    alert("El resultado de la suma es: " + SUMA)
}
