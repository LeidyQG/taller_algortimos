function notaFinal(){
    let parcial1=parseFloat(document.getElementById("parcial1").value);
    let parcial2=parseFloat(document.getElementById("parcial2").value);
    let parcial3=parseFloat(document.getElementById("parcial3").value);;
    acumuladoP=((parcial1+parcial2+parcial3)/3)*0.55;
    let notaF=parseFloat(document.getElementById("notaF").value);
    let trabajoF=parseFloat(document.getElementById("trabajoF").value);
    definitiva=((notaF*0.30)+(trabajoF*0.15)+acumuladoP);
    document.getElementById("definitiva").innerHTML=`Su definitiva es: ${definitiva.toFixed(2)}`;
}
