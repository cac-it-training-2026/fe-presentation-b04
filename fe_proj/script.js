let score = parseInt(sessionStorage.getItem("currentScore")) || 0;

let answeredQuestions = JSON.parse(sessionStorage.getItem("answeredQuestions")) || [];

function checkAnswer(qName, correctValue) {
  const selected = document.querySelector(`input[name="${qName}"]:checked`);
  
  if (!selected) {
    alert("選択肢を選んでください！");
    return;
  }

  document.getElementById("answer-details").open = true;

  if (selected.value === correctValue) {

    if (!answeredQuestions.includes(qName)) {
      score++;
      answeredQuestions.push(qName);
      sessionStorage.setItem("currentScore", score);
      sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    }
    alert("正解です！");
  } else {

    if (!answeredQuestions.includes(qName)) {
      answeredQuestions.push(qName);
      sessionStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
    }
    alert("不正解です。");
  }
}


function goToNextPage(nextPageUrl) {
  window.location.href = nextPageUrl;
}


function finishAndHome() {

  alert(`クイズ終了です！あなたの正解数は 3問中 ${score}問 でした！`);
  
  sessionStorage.clear();
  window.location.href = "index.html";
}

function resetQuiz() {
  sessionStorage.clear();
}

