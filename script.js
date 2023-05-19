var tipvalue=document.querySelector(".container3");
function main()
{
    var input=document.getElementById("input").value;
    var input1=document.getElementById("input1");
    var tip=document.getElementById("range").value;
    var span=document.querySelector(".span")
    span.innerHTML=`${tip}%`;
    var value=((tip)/100)*input;
    tipvalue.innerHTML=`Tip Value = ${value}`;
    var totalamount= Number(value+input);
    input1.value=totalamount;
}
