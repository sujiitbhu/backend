// window.alert("this is a fake alert");
// console.log(56+3);
// console.log(damo.color);
function fn(){

    var y =document.cookie;
document.getElementById('damo').innerHTML = y;
}
let x=3+4+56-"34"+"wger"+45+6;


//document.getElementById('nameofid').innerHTML=x;



function mydisplay(some){
    document.getElementById("demo").innerHTML=some;
}
function mycalculator(num1,num2,mycallback){
    let sum=num1+num2;
    mycallback(sum);
}
mycalculator(5,5,mydisplay);