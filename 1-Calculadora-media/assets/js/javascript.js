// var nome = "Daiane"

// var notaDoPrimeiroBimestre = 9
// var notaDoSegundoBimestre = 7
// var notaDoTerceiroBimestre = 4
// var notaDoQuartoBimestre = 2 

// var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

// var notaFixada = notaFinal.toFixed(1)

// console.log("Bem vindo " + nome)
// console.log(notaFixada)


function CalcMedia() {
var nome = document.getElementById("name").value;
  
var notaPrimeiroBimestre = document.getElementById("PrimeiroBimestre").value;
var notaSegundoBimestre = document.getElementById("SegundoBimestre").value;
var notaTerceiroBimestre = document.getElementById("TerceiroBimestre").value;
var notaQuartoBimestre = document.getElementById("QuartoBimestre").value;
  
var notaCalculada =
(parseInt(notaPrimeiroBimestre) + parseInt(notaSegundoBimestre) + parseInt(notaTerceiroBimestre) + parseInt(notaQuartoBimestre)) / 4;
  
var notaFinal = notaCalculada.toFixed(1);
  
document.getElementById("results").innerHTML = notaFinal;
  
let aprovation;
var aprovado = "Parabéns " + nome + ", VOCÊ FOI APROVADO(A)!!";
var reprovado = "Que pena " + nome + ", VOCÊ FOI REPROVADO!(A)";
  
salvar = notaFinal > 6 ? aprovado : reprovado;
  
document.getElementById("classification").innerHTML = salvar;
  
if (salvar === aprovado) {
document.getElementById("classification").style.background = "#009c2f";
} else {
document.getElementById("classification").style.background = "#9c0000";
}
}