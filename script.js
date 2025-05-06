const quizData = [
  {
    pergunta: "1. Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correta: 2
  },
  {
    pergunta: "2. Qual planeta é conhecido como o planeta vermelho?",
    opcoes: ["Terra", "Júpiter", "Marte", "Saturno"],
    correta: 2
  },
  {
    pergunta: "3. Quem escreveu 'Dom Quixote'?",
    opcoes: ["Machado de Assis", "Cervantes", "Shakespeare", "Fernando Pessoa"],
    correta: 1
  },
  {
    pergunta: "4. Quantos continentes existem?",
    opcoes: ["5", "6", "7", "8"],
    correta: 2
  },
  {
    pergunta: "5. Qual é o maior oceano do mundo?",
    opcoes: ["Atlântico", "Índico", "Pacífico", "Ártico"],
    correta: 2
  }
];

const quizForm = document.getElementById("quiz-form");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function carregarQuiz() {
  quizData.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    const pergunta = document.createElement("p");
    pergunta.textContent = q.pergunta;
    questionDiv.appendChild(pergunta);

    q.opcoes.forEach((opcao, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `pergunta${index}`;
      input.value = i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(` ${opcao}`));
      questionDiv.appendChild(label);
    });

    quizForm.appendChild(questionDiv);
  });
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let pontos = 0;

  quizData.forEach((q, index) => {
    const resposta = document.querySelector(`input[name="pergunta${index}"]:checked`);
    if (resposta && parseInt(resposta.value) === q.correta) {
      pontos++;
    }
  });

  resultContainer.textContent = `Você acertou ${pontos} de ${quizData.length} perguntas.`;
});

carregarQuiz();
