
function gerarFrase() {
    var arrayList = ["",
        "Viver é arriscar tudo. Caso contrário você é apenas um pedaço inerte de moléculas montadas aleatoriamente à deriva onde o universo te sopra.",
        "Ninguém existe de propósito, ninguém pertence a nenhum lugar, todos vão morrer.",
        "O amor é apenas uma reação química.",
        "Planejar o fracasso é ainda mais idiota do que simplesmente planejar.",
        "Então é suposto todo mundo dormir todas as noites agora?Você tem noção que metade de todo o tempo que existe é de noite?",
        "É sua escolha tornar isso pessoal.",
        "Eu sei que novas situações podem ser intimidantes. Você está olhando ao redor e são todos assustadores e diferentes, mas basta encara-los de frente, como um touro - é assim que crescemos como pessoas.",
        "É incrível o que uma mente talentosa pode realizar quando as prioridades estão em ordem."
    ];

    var elem = document.getElementById("frases");
    var q = arrayList[Math.floor(Math.random() * arrayList.length)]

    while (q == "") {
        var q = arrayList[Math.floor(Math.random() * arrayList.length)]
    }

    elem.style.display = "unset";
    elem.innerHTML = '"' + q + '"';
}