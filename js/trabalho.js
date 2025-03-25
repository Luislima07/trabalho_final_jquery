$("#calcular").click(function(){
    var valor1 = parseInt($("#txtvalor1").val())
    var valor2 = parseInt($("#txtvalor2").val())
    var valor3 = parseInt($("#txtvalor3").val())

    ordem = valor1, ",", valor2, ",", valor3
    media = (valor1 + valor2 + valor3)/3

    $("#ordem")
        .text("Ordem crescente dos valores: " + ordem)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'orange'})


    $("#media")
        .text("A Média dos valores é: " + media)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'blue'})
    
    var loop = valor1 + valor2 + valor3
    for(var x = 1; x <= loop; x++){
        loop += lopp + x
    }
});