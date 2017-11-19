var  str='';
var btn=document.getElementsByClassName("btu");
function showData (which){
    str+=which.value;
    document.getElementById("result").innerHTML=str;
}
function calculate (){
    console.log(str);
    document.getElementById("result").innerHTML = '';
    var resultNUM=eval(str);
    resultNUM+='';
    document.getElementById("result").innerHTML = resultNUM;
    str=resultNUM;
}
function clearData (){
    str='';
    document.getElementById("result").innerHTML = 0;
}
function f(which){
        switch(which.value)
        {
            case "=":calculate();
                    console.log(which.value);
                    break;
            case "c":clearData();
                    break;
            default:showData(which);
        }
}
function g(){
    var btn=document.getElementsByClassName("btn");
    for(var i=0;i<btn.length;i++)
    {
        btn[i].onclick=function(){
            f(this);
        };
    }
}
window.onload=function(){g();};