function operacoes() {

    var valorA = "";
    var valorB = "";

    var A = document.getElementById("vlrA");
    var B = document.getElementById("vlrB");
    var soma = document.getElementById("mais");
    var subtracao = document.getElementById("menos");
    var multiplicacao = document.getElementById("mult");
    var divisao = document.getElementById("div");
    var somaResult = document.getElementById("maisResult");
    var subResult = document.getElementById("menosResult");
    var multResult = document.getElementById("multResult");
    var divResult = document.getElementById("divResult");

    if (A.value == "" || B.value == "") {
        alert("Por favor, preencha todos os campos de valores!");
    }
    else {

        soma.innerHTML = A.value + " + " + B.value;
        subtracao.innerHTML = A.value + " - " + B.value;
        multiplicacao.innerHTML = A.value + " * " + B.value;
        divisao.innerHTML = A.value + " / " + B.value;

        somaResult.innerHTML = parseInt(A.value) + parseInt(B.value);
        subResult.innerHTML = A.value - B.value;
        multResult.innerHTML = A.value * B.value;
        divResult.innerHTML = A.value / B.value;
    }
}