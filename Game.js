var p1=localStorage.getItem("Player1");

var p2=localStorage.getItem("Player2");


var score1=0;
var score2=0;



document.getElementById("starlight").innerHTML="question turn-"+p2;
document.getElementById("celestia").innerHTML="answer turn-"+p1;


function send(){
    var mlp=document.getElementById("q1").value;
    var celestia=document.getElementById("q2").value;
    document.getElementById("display").innerHTML= mlp+" x "+ celestia;
    input= "<br>answer :<input id='mlp' type='number' placeholder='Enter answer'>        ";
check="<br><br><button class='MLP' onclick='Check()'>Check</button>";
row=input+check;
document.getElementById("mlp").innerHTML=row;;
    }
question_turn="pl1";
answer_turn="pl2";
function Check(){
    var t=mlp * celestia
var luna=document.getElementById("mlp").value;
if(luna== t  ){
    if(answer_turn==pl1){
        score1=score1+1
    document.getElementById('pl1').innerHTML=pl1+ ":"+ score1;
    document.getElementById("scopl1").innerHTML="Correct";
    
    
    
    
    }
    else{
    
    score2=score2+1;
    document.getElementById('pl2').innerHTML=pl2+ ":"+ score2;
    document.getElementById("scopl2").innerHTML="Correct";

    





    }
}
    
else{
    if(answer_turn==pl1){
        score1=score1+1
    document.getElementById('pl2').innerHTML=pl2+ ":"+ score2;
    document.getElementById("scopl1").innerHTML="Wrong";
    document.getElementById()
    
    
    
    }
    else{
    
    score2=score2+1;
    document.getElementById('pl2').innerHTML=pl2+ ":"+ score2;
    document.getElementById("scopl2").innerHTML="Correct";

}



























}

































}

