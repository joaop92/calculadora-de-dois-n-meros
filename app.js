function calcular() {
    var num1= document.getElementById("num1").value;
    var num2= document.getElementById("num2").value;
    var operacao = num document.getElementById("operacao").value;

    switch (operacao){
        case "1":
            resultado = num1 + num2;
            break;
            
            case "2":
            resultado = num1- num2;
            break;

            case "3":
            resultado = num1 * num2;
            break;

            case "4":
            resultado = num1 / num2;
            break;
        default:
            resultado = 0;

    }
    document.getElementById("resultado").innerHTML = resultado
}