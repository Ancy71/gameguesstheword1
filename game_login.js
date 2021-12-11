function addUser(){

    p1name = document.getElementById("p1name").value;

    p2name = document.getElementById("p2name").value;

    localStorage.setItem("Player1Name", p1name);

    localStorage.setItem("Player2Name", p2name);

    window.location = "game_page.html";

}