function Login(){
    var player_1 =document.getElementById("Player1").value;
    var player_2 =document.getElementById("Player2").value;
   
   localStorage.setItem("player1_name", player_1);
   localStorage.setItem("player2_name",player_2);
   
   
   window.location="Q.html";
   
   
   }