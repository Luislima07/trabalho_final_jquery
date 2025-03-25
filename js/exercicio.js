$("#alternar1").hide(function(){
});

$("#alert2").hide(function () { 
});

$("#alert3").hide(function () { 
});

$("#alternar1").click(function (){
    $("#link").attr({
        "href": "https://etecitu.cps.sp.gov.br/",
        "title": "Etec Itu"
    });
    $("#link").text("Etec");
    $("#alternar2").show();
    $("#alternar3").show();
    $("#alternar1").hide();
    $("#alert2").hide();
    $("#alert3").hide();
    $("#alert1").show();
});

$("#alternar2").click(function () {
    $("#link").attr({
        "href": "https://fatecitu.cps.sp.gov.br/",
        "title": "FATEC"
    });
    $("#link").text("FATEC");
    $("#alternar1").show();
    $("#alternar3").show();
    $("#alternar2").hide();
    $("#alert1").hide();
    $("#alert3").hide();
    $("#alert2").show();
});

$("#alternar3").click(function () {
    $("#link").attr({
        "href": "https://cps.sp.gov.br",
        "title": "CPS"
    });
    $("#link").text("CPS");
    $("#alternar1").show();
    $("#alternar2").show();
    $("#alternar3").hide();
    $("#alert1").hide();
    $("#alert2").hide();
    $("#alert3").show();
});

