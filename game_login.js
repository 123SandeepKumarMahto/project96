

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    function addUser() {
      player1_name = document.getElementById("player1_name_").value;
      player2_name = document.getElementById("player2_name_").value;
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
      window.location = "game_page.html";
  
  }
  
    