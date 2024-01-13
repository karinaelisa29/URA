// Definim întrebările și răspunsurile
const questions = [
    {
      question: "Care este capitala Franței?",
      options: ["Londra", "Paris", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Cine a scris 'Romeo și Julieta'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "Care este cel mai înalt vârf montan din lume?",
      options: ["Mount Everest", "K2", "Matterhorn"],
      correctAnswer: "Mount Everest"
    },
    
    {
      question: "Care este capitala Franței?",
      options: ["Londra", "Paris", "Berlin"],
      correctAnswer: "Paris"
    },
    {
      question: "Cine a scris 'Romeo și Julieta'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "Care este cel mai înalt vârf montan din lume?",
      options: ["Mount Everest", "K2", "Matterhorn"],
      correctAnswer: "Mount Everest"
    },
    {
      question: "Ce planetă este cunoscută ca 'Planeta Roșie'?",
      options: ["Jupiter", "Marte", "Venus"],
      correctAnswer: "Marte"
        },
        {
          question: "Care este cel mai mare ocean de pe Pământ?",
          options: ["Oceanul Atlantic", "Oceanul Indian", "Oceanul Pacific"],
          correctAnswer: "Oceanul Pacific"
    }
    ];
      
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Funcție pentru a afișa întrebarea curentă
  function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];
  
    questionContainer.innerHTML = `
      <p>${currentQuestion.question}</p>
      <ul>
        ${currentQuestion.options.map(option => `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`).join('')}
      </ul>
    `;
  }
  
  // Funcție pentru a verifica răspunsul și a actualiza scorul
  function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      // Dacă mai sunt întrebări, afișăm următoarea întrebare
      showQuestion();
    } else {
      // Dacă s-au răspuns toate întrebările, afișăm scorul final
      showResult();
    }
  }
  // ... alte coduri ...

// Funcție pentru a reseta jocul
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
  }
  
  // Funcție pentru a afișa răspunsul corect
  function showCorrectAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p>Răspunsul corect este: ${currentQuestion.correctAnswer}</p>`;
  }
  
  
  
  // Funcție pentru a afișa scorul final
  function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<p>Scorul tău final este: ${score} / ${questions.length}</p>`;
  }
  
  // Inițializare - afișăm prima întrebare
  showQuestion();
  