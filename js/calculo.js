$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());

    var resultado = parseFloat((valor1 + valor2) / 100);
    var moeda = resultado.toLocaleString("pt-BR", 
        {
            style: "currency",
            currency: "BRL"
        });
    $("#resultado")
        .text("Resultado: " + moeda)
        .css({ 'font-weight': 'bold', 'font-size': '18pt'});

    alert(resultado)
    

    if(valor1>valor2){
        msg = "Valor 1 é maior"
    }
    else if(valor1<valor2){
        msg = "Valor 2  é maior"
    } else{
        msg = "Valores são iguais"
    }
    alert(msg)
            

    switch(parseInt(resultado) % 2 ){
        case 0:
            msg += ' - Resultado Par';
            break;
        default:
            msg += ' - Resultado Ímpar';
            break
    }
     $("#msg")
        .text("Mensagem: " + msg)
        .css({ 'font-weight': 'bold', 'font-size': '18pt', 'color': 'blue'})

    //Fatorial
    var fatorial = 1;
    for(var x = 1; x <= valor1; x++){
        fatorial *= x;
    }

    $("#fatorial")
    .text("Fatorial: " + fatorial )
    .css({ 'font-weight':'bold', 'font-size': '20pt', 'color': 'green'})


});

    

