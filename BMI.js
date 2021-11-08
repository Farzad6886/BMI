function BMI(){
var txt1=Number(  document.getElementById('txt1').value);
var txt2=Number(  document.getElementById('txt2').value);
var sum= txt1/(txt2*txt2);
document.getElementById('lbl').innerHTML="your BMI is :"+sum;
}


