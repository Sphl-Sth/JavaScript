function getNumber(){
        var num = (Math.trunc(Math.random()*100));
    document.getElementById("showRes").innerHTML = "The Random Number is " + num;
}

function delNumber(){
    document.getElementById("showRes").innerHTML = "";
}


