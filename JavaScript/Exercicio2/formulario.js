function contaChar(){
var Desc = document.getElementById("dsc");
var Cont = document.getElementById("cont");
var Remaining = 140 - Desc.value.length;
Cont.innerHTML = Remaining;
}

/*===============================================================*/

function allCheckbox(){
var CheckALL = document.getElementById("all");
var Check1 = document.getElementById("1");
var Check2 = document.getElementById("2");
var Check3 = document.getElementById("3");
        if(CheckALL.checked == true){
                Check1.checked = true;
                Check2.checked = true;
                Check3.checked = true;
        }
        else{
                Check1.checked = false;
                Check2.checked = false;
                Check3.checked = false;
        }
}

/*===============================================================*/ 

function limpar(){
var CheckALL = document.getElementById("all");
var Check1 = document.getElementById("1");
var Check2 = document.getElementById("2");
var Check3 = document.getElementById("3");
var Desc = document.getElementById("dsc");
var Contador = document.getElementById("cont");

CheckALL.checked = false;
Check1.checked = false;
Check2.checked = false;
Check3.checked = false;
Desc.value = null;
Contador.innerHTML = "140";
}