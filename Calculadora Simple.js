function Calculadora(){
    console.log("Ingresa en el menu de opciones la operacion que deseas realizar");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicacion");
    console.log("4. Division");
    console.log("5. Salir");
    var opcion = prompt("Ingresa la opcion que deseas realizar");
    switch(opcion){
        case "1":
            var num1 = prompt("Ingresa el primer numero");
            var num2 = prompt("Ingresa el segundo numero");
            var suma = parseInt(num1) + parseInt(num2);
            console.log("La suma es: " + suma);
            break;
        case "2":
            var num1 = prompt("Ingresa el primer numero");
            var num2 = prompt("Ingresa el segundo numero");
            var resta = parseInt(num1) - parseInt(num2);
            console.log("La resta es: " + resta);
            break;
        case "3":
            var num1 = prompt("Ingresa el primer numero");
            var num2 = prompt("Ingresa el segundo numero");
            var multiplicacion = parseInt(num1) * parseInt(num2);
            console.log("La multiplicacion es: " + multiplicacion);
            break;
        case "4":
            var num1 = prompt("Ingresa el primer numero");
            var num2 = prompt("Ingresa el segundo numero");
            var division = parseInt(num1) / parseInt(num2);
            console.log("La division es: " + division);
            break;
        case "5":
            console.log("Gracias por utilizar la calculadora");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}