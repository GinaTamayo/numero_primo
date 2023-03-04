let numero = parseInt(prompt("Ingrese numero"));
switch (numero > 15) {
    case true:
        console.log("Ingrese un numero menor a 15")
        break;

        
    default:
        switch (numero) {
            case 2:
            case 3:
            case 5:
            case 7:
            case 11:
            case 13:    
                console.log(numero , "es un numero primo")
                break;
            default:
                console.log(numero , "no es un numero primo")
                break;
        }
        break;
}