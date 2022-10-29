
function convertirMoneda() {
    var dolar = document.getElementById("dolar").value;
    var trm = document.getElementById("trm").value;
    var monedaConvertida = dolar * trm;
    document.getElementById("peso").value = monedaConvertida;
}
