Player1Name = localStorage.getItem("Player1Name");

Player2Name = localStorage.getItem("Player2Name");

p1sc = 0;

p2sc = 0;

document.getElementById("Player1Name").innerHTML = Player1Name + ":";

document.getElementById("Player2Name").innerHTML = Player2Name+ ":";

document.getElementById("Player1Score").innerHTML = p1sc;

document.getElementById("Player2Score").innerHTML = p2sc;

document.getElementById("pNq").innerHTML = "Question turn:" + Player1Name;

document.getElementById("pNa").innerHTML = "Answer turn:" + Player2Name;

function send(){

    gWord = document.getElementById("word").value;

    word = gWord.toLowerCase();

    console.log("Word: " + word);

    c1 = word.charAt(1);

    console.log(c1);

    c2n = Math.floor(word.length / 2);

    c2 = word.charAt(c2n);

    console.log(c2);

    c3n = word.length - 1;

    c3 = word.charAt(c3n);

    console.log(c3);

    c1r = word.replace(c1, "_");

    c2r = c1r.replace(c2, "_");

    c3r = c2r.replace(c3, "_");

    console.log(c3r);

    qWord = "<h4 id='word_display'>Question: " + c3r + "</h4>";

    input = "<br> Answer: <input type='text' id='input_check_box'>";

    bCheck = "<br> <br><button class='btn btn-info' onclick='check()'>Check</button>";

    cQIB = qWord + input + bCheck;

    document.getElementById("output").innerHTML = cQIB;
    document.getElementById("word").value="";
}
question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	
	{
		if(answer_turn == "player1")
		{
			p1sc = p1sc +1;
		    document.getElementById("Player1Score").innerHTML = p1sc;
		}
		else 
		{
			p2sc= p2sc +1;
		    document.getElementById("Player2Score").innerHTML = p2sc;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2";
		document.getElementById("pNq").innerHTML = "Question Turn - " + Player2Name ;
	}
	else 
	{
		question_turn = "player1";
		document.getElementById("pNq").innerHTML = "Question Turn - " + Player1Name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2";
		document.getElementById("pNa").innerHTML = "Answer Turn - " + Player2Name ;
	}
	else 
	{
		answer_turn = "player1";
		document.getElementById("pNa").innerHTML = "Answer Turn - " + Player1Name ;
	}

    document.getElementById("output").innerHTML = "";
}

