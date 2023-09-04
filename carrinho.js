function pagueValor(){
     preço1 = 264.90;
     preço2 = 26.42;
     preço3 = 45.99;

 Q1 = parseFloat(document.getElementById("q1").value) || 0;
 Q2 = parseFloat(document.getElementById("q2").value) || 0;
 Q3 = parseFloat(document.getElementById("q3").value) || 0;

somaP1 = Q1*preço1;
somaP2 = Q2*preço2;
somaP3 = Q3*preço3;

document.getElementById("v1").textContent = somaP1.toFixed(2);
document.getElementById("v2").textContent = somaP2.toFixed(2);
document.getElementById("v3").textContent = somaP3.toFixed(2);

P4 = somaP1 + somaP2 + somaP3;
  document.getElementById("Vtotal").textContent = P4.toFixed(2);
  document.getElementById("tt").textContent = P4.toFixed(2);
  
}
function finalizarCompra(){
  let res = confirm("Comfirmar Compra?");
  if(res === true){
    alert("Compra Realizada com Sucesso");
  }
  else{
     alert("Compra canselada");
  };
}
