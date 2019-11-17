var data = new Date();
var hora = data.getHours();
var saudacao;

var altura = Math.max(document.documentElement.clientHeight, window.innerWidth || 0);
var largura = Math.max(document.documentElement.clientWidth,window.innerWidth || 0);


if(hora >= 06 && hora < 12){
    saudacao = "Bom dia!";
}
else if(hora >= 12 && hora < 18){
    saudacao = "Boa tarde!";
}
else{
    saudacao = "Boa noite!";
}

var elemento1 = document.getElementById("saudacao");
var elemento2 = document.getElementById("altura");
var elemento3 = document.getElementById("largura");

elemento1.innerHTML = saudacao;
elemento2.innerHTML = altura + " Pixels de altura.";
elemento3.innerHTML = largura + " Pixels de largura.";