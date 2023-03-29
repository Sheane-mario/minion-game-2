import minionGameOutput from "./GameStats.js";
import { subStringsOfTheString } from "./GameStats.js";

const formEl = document.querySelector(".form");

function formSubmitHandler(event) {
  event.preventDefault();
  const userEnteredWord = event.target[0].value;
  const consonentPlayerName = event.target[1].value;
  const vowelPlayerName = event.target[2].value;
  const wordEl = document.getElementById("user-entered-word");
  const consonantPlayerEl = document.getElementById("consonant-player");
  const vowelPlayerEl = document.getElementById("vowel-player");
  const consonantPlayerTotalEl = document.getElementById(
    "consonant-player-total"
  );
  const vowelPlayerTotalEl = document.getElementById("vowel-player-total");
  const winnerEl = document.querySelector(".winner");
  const consonantSubStr = document.querySelector(".words__consonant-player");
  const consonantSubStrScore = document.querySelector(
    ".score__consonant-player"
  );
  const vowelSubStr = document.querySelector(".words__vowel-player");
  const vowelSubStrScore = document.querySelector(".score__vowel-player");
  wordEl.innerText = userEnteredWord;
  consonantPlayerEl.innerText = consonentPlayerName;
  vowelPlayerEl.innerText = vowelPlayerName;

  let WinnerLooser = minionGameOutput(
    userEnteredWord,
    vowelPlayerName,
    consonentPlayerName
  );
  const status = Object.keys(WinnerLooser).length === 2 ? "active" : "draw";
  if (status == "draw") {
    winnerEl.innerHTML = "<span>status:</span> drawn 😥😭";
  } else {
    winnerEl.innerHTML = `<span>winner:</span> ${WinnerLooser.Winner[0]} 🏆🏆`;
    consonentPlayerName === WinnerLooser.Winner[0]
      ? (consonantPlayerTotalEl.innerText = `total: ${WinnerLooser.Winner[1]}`)
      : (consonantPlayerTotalEl.innerText = `total: ${WinnerLooser.Looser[1]}`);

    vowelPlayerName === WinnerLooser.Winner[0]
      ? (vowelPlayerTotalEl.innerText = `total: ${WinnerLooser.Winner[1]}`)
      : (vowelPlayerTotalEl.innerText = `total: ${WinnerLooser.Looser[1]}`);
  }

  const [consonantPlayerSubStr, vowelPlayerSubStr] =
    subStringsOfTheString(userEnteredWord);

  Object.keys(consonantPlayerSubStr).forEach((subStr) => {
    const item = document.createElement("div");
    item.innerText = subStr;
    consonantSubStr.append(item);
  });
  Object.values(consonantPlayerSubStr).forEach((score) => {
    const scoreItem = document.createElement("div");
    scoreItem.innerText = score;
    consonantSubStrScore.append(scoreItem);
  });
  Object.keys(vowelPlayerSubStr).forEach((subStr) => {
    const item = document.createElement("div");
    item.innerText = subStr;
    vowelSubStr.append(item);
  });
  Object.values(vowelPlayerSubStr).forEach((score) => {
    const scoreItem = document.createElement("div");
    scoreItem.innerText = score;
    vowelSubStrScore.append(scoreItem);
  });
}

formEl.addEventListener("submit", formSubmitHandler);
