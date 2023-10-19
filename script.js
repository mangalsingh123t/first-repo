
	const Questions = [{
		q: "How do you declare a JavaScript variable?",
		a: [{ text: "int carname", isCorrect: false },
		{ text: "variable carname", isCorrect: false },
		{ text: "let carname", isCorrect: true },
		{ text: "v carname", isCorrect: false }
		]
	},
	{
		q: "How do you create a function in JavaScript?",
		a: [{ text: "myfunction()", isCorrect: false },
		{ text: "function=myfunction()", isCorrect: false },
		{ text: "function()", isCorrect: false },
		{ text: "function myfunction()", isCorrect: true }
		]
	},
	{
		q: "How can you add a comment in a JavaScript?",
		a: [{ text: "<!--this is comment -->", isCorrect: false },
		{ text: " 'this is comment'", isCorrect: false },
		{ text: "// this is comment", isCorrect: true },
		{ text: "`this is comment`", isCorrect: false }
		]
	},
	{
		q: "What is the syntax of a “for” statement in JavaScript?",
		a: [{ text: "for(increment; condition; initialization)", isCorrect: false },
		{ text: " for(initialization, condition)", isCorrect: false },
		{ text: "for(initialization; condition; increment)", isCorrect: true },
		{ text: " for(condition; initialization; increment)", isCorrect: false }
		]
	},
	{
		q: "Which built-in method returns the length of the string?",
		a: [{ text: "None of the above", isCorrect: false },
		{ text: "index()", isCorrect: false },
		{ text: "size()", isCorrect: false },
		{ text: "length()", isCorrect: true }
		]
	},
	{
		q: "Which built-in method returns the calling string value converted to upper case?",
		a: [{ text: "toUpperCase()", isCorrect: true },
		{ text: "changecase()", isCorrect: false },
		{ text: "toLowercase()", isCorrect: false },
		{ text: "None of the above", isCorrect: false }
		]
	},
	{
		q: "Inside which HTML element do we put the JavaScript?",
		a: [{ text: "<script>", isCorrect: true },
		{ text: "<style>", isCorrect: false },
		{ text: "<js>", isCorrect: false },
		{ text: "<scripting>", isCorrect: false }
		]
	},
	{
		q: "How to write an IF statement in JavaScript?",
		a: [{ text: "if(i==5)", isCorrect: true },
		{ text: "if i==5", isCorrect: false },
		{ text: "if=i==5", isCorrect: false },
		{ text: "if i=5 then", isCorrect: false }
		]
	},
	{
		q: "Javascript is an _______ language?",
		a: [{ text: "Object-Oriented", isCorrect: true },
		{ text: "Object-based", isCorrect: false },
		{ text: "Proderal", isCorrect: false },
		{ text: "None of the above", isCorrect: false }
		]
	},
	{
		q: " How does a While loop start?",
		a: [{ text: "while(1<5;i++)", isCorrect: false },
		{ text: "while(i<5)", isCorrect: true },
		{ text: "while i==5", isCorrect: false },
		{ text: "while i<5", isCorrect: false }
		]
	}
	]


	let currQuestion = 0
let score = 0
let usedqueindex=[]
function loadQues() {
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");
    let randomIndex;
    if(usedqueindex.length === Questions.length){
     trackaarray.length = 0;
    }
    
    do{
     randomIndex = Math.floor(Math.random() * Questions.length)
    }
    while(usedqueindex.includes(randomIndex));
    usedqueindex.push(randomIndex);
  
    const selectedQuestion = Questions[randomIndex]
  
    question.textContent = selectedQuestion.q;
    opt.innerHTML = "";
  
    for (let i = 0; i < selectedQuestion.a.length; i++) {
      const choicesdiv = document.createElement("div");
      const choice = document.createElement("input");
      const choiceLabel = document.createElement("label");

      choice.setAttribute("id", i);
      choiceLabel.setAttribute("for", i);

  
      choice.type = "radio";
      choice.name = "answer";
      choice.value = i;
  
      choiceLabel.textContent = selectedQuestion.a[i].text;
  
      choicesdiv.appendChild(choice);
      choicesdiv.appendChild(choiceLabel);
      opt.appendChild(choicesdiv);
    }
  }
  
loadQues();

function countscore() {
    const totalScore = document.getElementById("score")
    // const correctAnswer = document.getElementById('correctAnswers');
    console.log("total .........", score / Questions.length * 100)
    const number = score / Questions.length * 100;
    const truncatedNumber = Math.trunc(number);  // round 
    // const truncatedNumber = Number.parseInt(number);

    // console.log(typeof(truncatedNumber))
    // totalScore.textContent = (`users score as a percentage  ${score/Questions.length*100}`)
    console.log(score)
    totalScore.textContent = (`your score in percentage :  ${truncatedNumber}%`)
    // correctAnswer.textContent = 'Correct answers: \nQuestion 1: C) let carname\n  Question 2: B) function myfunction())  Question 3: C) //this is comment)';
}
function nextQuestion() {

    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        countscore();
    }
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        // document.write("answer is correct")
        // alert(Questions[currQuestion])
        nextQuestion();
    } else {
        nextQuestion();
        console.log("incorrect")
    }
}

// function reset(){
//     location.reload()
// }



	// let currQuestion = 0;
	// let score = 0;
	// let usedQueIndex = [];

	// function shuffleArray(array) {
	// 	for (let i = array.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		[array[i], array[j]] = [array[j], array[i]];
	// 	}
	// }

	// function loadQuestions() {
	// 	const question = document.getElementById("ques");
	// 	const opt = document.getElementById("opt");

	// 	if (usedQueIndex.length === Questions.length) {
	// 		usedQueIndex = [];
	// 		shuffleArray(Questions);
	// 	}

	// 	const selectedQuestion = Questions[usedQueIndex.length];
	// 	usedQueIndex.push(usedQueIndex.length);

	// 	question.textContent = selectedQuestion.q;
	// 	opt.innerHTML = "";

	// 	for (let i = 0; i < selectedQuestion.a.length; i++) {
	// 		const choicesDiv = document.createElement("div");
	// 		const choice = document.createElement("input");
	// 		const choiceLabel = document.createElement("label");
	// 		choice.setAttribute("id", i);
	// 		choiceLabel.setAttribute("for", i);

	// 		choice.type = "radio";
	// 		choice.name = "answer";
	// 		choice.value = i;

	// 		choiceLabel.textContent = selectedQuestion.a[i].text;

	// 		choicesDiv.appendChild(choice);
	// 		choicesDiv.appendChild(choiceLabel);
	// 		opt.appendChild(choicesDiv);
	// 	}
	// }

	// shuffleArray(Questions);
	// loadQuestions();

	// function countscore() {
	// 	const totalScore = document.getElementById("score")
	// 	// const correctAnswer = document.getElementById('correctAnswers');
	// 	console.log("total .........", score / Questions.length * 100)
	// 	const number = score / Questions.length * 100;
	// 	const truncatedNumber = Math.trunc(number);  // round 
	// 	// const truncatedNumber = Number.parseInt(number);

	// 	// console.log(typeof(truncatedNumber))
	// 	// totalScore.textContent = (`users score  as a percentage  ${score/Questions.length*100}`)
	// 	console.log(score)
	// 	totalScore.textContent = (`your score in percentage :  ${truncatedNumber}%`)
	// 	// correctAnswer.textContent = 'Correct answers: \nQuestion 1: C) let carname\n  Question 2: B) function myfunction())  Question 3: C) //this is comment)';
	// }
	

	// function nextQuestion() {
	// 	if (currQuestion < Questions.length - 1) {
	// 		currQuestion++;
	// 		loadQuestions();
	// 	} else {
	// 		document.getElementById("opt").remove();
	// 		document.getElementById("ques").remove();
	// 		document.getElementById("btn").remove();
	// 		countscore();
	// 	}
	// }

	// function prevQuestion() {
	// 	if (currQuestion > 0) {
	// 		currQuestion--;
	// 		loadQuestions();
	// 	}
	// }

	// function checkAns() {
	// 	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	// 	if (Questions[currQuestion].a[selectedAns].isCorrect) {
	// 		score++;
	// 		console.log("Correct")
	// 		// document.write("answer is correct" )
	// 		// alert(Questions[currQuestion])
	// 		nextQuestion()
	// 	}
	// 	else {
	// 		nextQuestion();
	// 		console.log("incorrect")
	// 	}
	// }

	// // function reset(){
	// // 	location.reload()
	// // }