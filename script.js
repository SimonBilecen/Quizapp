let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "was bedeutet das HTML Tag &lt;a&gt",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt:frame&gt;",
        "answer_4": "&lt;frameset&gt",
        "right_answer": 2
    },
    {
        "question": "Was ist HTML?",
        "answer_1": "Auszeichnungssprache für Hypertext?",
        "answer_2": "Älteste Programmiersprache",
        "answer_3": "Der Vorgänger von php",
        "answer_4": "Eine möglichkeit seinen Code zu stylen",
        "right_answer": 1
    },

];

let currentQuestion = 0;

function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        // Todo
        document.getElementById('end_screen').style =  '';
        document.getElementById('question_body').style = "display:none";
    }
    else {
        current_quiz_topic();

        let question = questions[currentQuestion];
        document.getElementById('current_question_number').innerHTML = currentQuestion + 1;
        document.getElementById('question_text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedNumber == question['right_answer']) {
        console.log('passt');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    }
    else {
        console.log('passt nicht du depp.')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function next_question() {

    currentQuestion++;
    showQuestion();
    resetAnswerButtons();

    if (questions.length -1 == currentQuestion){
        document.getElementById('next-button').innerHTML = "Ergebnis anzeigen";
    }
}

function resetAnswerButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function current_quiz_topic() {
    if(currentQuestion <=3 ) {
        document.getElementById('first_topic').classList.add('current_quiz2');
    }
    else {
        document.getElementById('first_topic').classList.remove('current_quiz2');
    }
}