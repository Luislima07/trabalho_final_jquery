var loop = 0

$("#calcular").click(function () {
    var valor1 = parseInt($("#txtvalor1").val())
    var valor2 = parseInt($("#txtvalor2").val())
    var valor3 = parseInt($("#txtvalor3").val())

    var ordem = [valor1, valor2, valor3].sort(function(a, b) {
        return a - b;
    });

    media = (valor1 + valor2 + valor3) / 3

    for (var x = valor2 - 1; x < valor2; x++){
        loop += valor2
    }
    
    

    $("#ordem")
        .text("Ordem crescente dos valores: " + ordem)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'orange' })


    $("#media")
        .text("A Média dos valores é: " + media)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'blue' })

    $("#loop")
        .text("Os valores usados na 2° caixa são: " + loop)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'green' })
    
});