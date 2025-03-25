$("#esconder").click(function(){
    $("#teste1").hide();    
});

$("#mostrar").click(function(){
    $("#teste1").show();
});

$("#alterarCSS").click(function(){
    $("#teste2").css({
        "background-color" : "black",
        "font-size" : "5rem",
        "color" : "white"
    });
});

$("#alterarClass").click(function(){
    $("#teste3").removeClass("alert-success").addClass("alert-danger");
    $("#alterarClass").removeClass("btn btn-success").addClass("btn btn-danger");
});

$("#alternar1").hide(function(){ 
});

$("#alternar1").click(function(){
    $("#link").attr({
        "href" : "https://cps.sp.gov.br",
        "title" : "CPS"
    });
    $("#link").text("CPS");
    $("#alternar1").hide();
    $("#alternar2").show();
});


$("#alternar2").click(function(){
    $("#link").attr({
        "href" : "https://fatecitu.cps.sp.gov.br/",
        "title" : "FATEC"
    });
    $("#link").text("FATEC");
    $("#alternar1").show();
    $("#alternar2").hide();
});



