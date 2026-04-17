const movers = [
  {
    id: "pencil",
    english: "pencil",
    irish: "peann luaidhe",
    subjectArticle: "an peann luaidhe",
    image: "assets/pencil.svg"
  },
  {
    id: "book",
    english: "book",
    irish: "leabhar",
    subjectArticle: "an leabhar",
    image: "assets/book.svg"
  },
  {
    id: "cup",
    english: "cup",
    irish: "cupán",
    subjectArticle: "an cupán",
    image: "assets/cup.svg"
  },
  {
    id: "ball",
    english: "ball",
    irish: "liathróid",
    subjectArticle: "an liathróid",
    image: "assets/ball.svg"
  }
];

const anchors = [
  {
    id: "table",
    english: "table",
    irish: "bord",
    gender: "masculine",
    nominative: "bord",
    genitive: "boird",
    afterArticle: "bord",
    eclipsed: "mbord",
    lenited: "bhord",
    genitiveArticle: "bhoird",
    image: "assets/table.svg"
  },
  {
    id: "chair",
    english: "chair",
    irish: "cathaoir",
    gender: "feminine",
    nominative: "cathaoir",
    genitive: "cathaoireach",
    afterArticle: "chathaoir",
    eclipsed: "gcathaoir",
    lenited: "chathaoir",
    genitiveArticle: "cathaoireach",
    image: "assets/chair.svg"
  },
  {
    id: "box",
    english: "box",
    irish: "bosca",
    gender: "masculine",
    nominative: "bosca",
    genitive: "bosca",
    afterArticle: "bosca",
    eclipsed: "mbosca",
    lenited: "bhosca",
    genitiveArticle: "bhosca",
    image: "assets/box.svg"
  },
  {
    id: "door",
    english: "door",
    irish: "doras",
    gender: "masculine",
    nominative: "doras",
    genitive: "dorais",
    afterArticle: "doras",
    eclipsed: "ndoras",
    lenited: "dhoras",
    genitiveArticle: "dorais",
    image: "assets/door.svg"
  }
];

const positions = [
  {
    id: "on",
    english: "on",
    irish: "ar",
    phrase: "ar an",
    objectForm: "eclipsed",
    rule: "After ar an, many consonants take urú/eclipsis: bord becomes mbord.",
    layout: { mover: [50, 43], anchor: [50, 67], moverScale: 0.9, anchorScale: 1 }
  },
  {
    id: "under",
    english: "under",
    irish: "faoi",
    phrase: "faoin",
    objectForm: "eclipsed",
    rule: "Faoi + an contracts to faoin, and the following noun can take urú/eclipsis.",
    layout: { mover: [50, 83], anchor: [50, 58], moverScale: 0.82, anchorScale: 1 }
  },
  {
    id: "above",
    english: "above",
    irish: "os cionn",
    phrase: "os cionn an",
    phraseByGender: { feminine: "os cionn na" },
    objectForm: "genitiveArticle",
    rule: "Os cionn takes the genitive after the article: bord becomes an bhoird; feminine nouns use na, as in na cathaoireach.",
    layout: { mover: [50, 28], anchor: [50, 72], moverScale: 0.95, anchorScale: 1 }
  },
  {
    id: "beside",
    english: "beside",
    irish: "in aice le",
    phrase: "in aice leis an",
    objectForm: "eclipsed",
    rule: "Leis an often puts the following noun into urú/eclipsis: bord becomes mbord.",
    layout: { mover: [28, 67], anchor: [64, 67], moverScale: 0.92, anchorScale: 1 }
  },
  {
    id: "behind",
    english: "behind",
    irish: "taobh thiar de",
    phrase: "taobh thiar den",
    objectForm: "lenited",
    rule: "De + an becomes den, and the following noun is often lenited: bord becomes bhord.",
    layout: { mover: [57, 62], anchor: [47, 66], moverScale: 0.72, anchorScale: 1.04, behind: true }
  },
  {
    id: "in-front-of",
    english: "in front of",
    irish: "os comhair",
    phrase: "os comhair an",
    phraseByGender: { feminine: "os comhair na" },
    objectForm: "genitiveArticle",
    rule: "Os comhair uses the genitive after the article: doras becomes an dorais; feminine nouns use na.",
    layout: { mover: [54, 74], anchor: [46, 62], moverScale: 1, anchorScale: 0.94 }
  }
];

const state = {
  prompt: null,
  attempts: 0,
  correct: 0,
  misses: []
};

const els = {
  scene: document.querySelector("#scene"),
  moverImage: document.querySelector("#moverImage"),
  anchorImage: document.querySelector("#anchorImage"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  feedback: document.querySelector("#feedback"),
  newPromptButton: document.querySelector("#newPromptButton"),
  showAnswerButton: document.querySelector("#showAnswerButton"),
  editDataButton: document.querySelector("#editDataButton"),
  dataDialog: document.querySelector("#dataDialog"),
  dataPreview: document.querySelector("#dataPreview"),
  subjectSceneLabel: document.querySelector("#subjectSceneLabel"),
  referenceSceneLabel: document.querySelector("#referenceSceneLabel"),
  moverLabel: document.querySelector("#moverLabel"),
  anchorLabel: document.querySelector("#anchorLabel"),
  positionLabel: document.querySelector("#positionLabel"),
  ruleText: document.querySelector("#ruleText"),
  correctCount: document.querySelector("#correctCount"),
  attemptCount: document.querySelector("#attemptCount"),
  missList: document.querySelector("#missList")
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function objectAfterPosition(anchor, position) {
  return anchor[position.objectForm] || anchor.afterArticle || anchor.nominative;
}

function phraseFor(anchor, position) {
  return position.phraseByGender?.[anchor.gender] || position.phrase;
}

function expectedSentence(prompt) {
  const object = objectAfterPosition(prompt.anchor, prompt.position);
  return `Tá ${prompt.mover.subjectArticle} ${phraseFor(prompt.anchor, prompt.position)} ${object}.`;
}

function normalized(text) {
  return text
    .toLocaleLowerCase("ga-IE")
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripFadas(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buildPrompt() {
  const mover = pick(movers);
  const anchor = pick(anchors);
  const position = pick(positions);
  state.prompt = { mover, anchor, position };
  renderPrompt();
}

function renderPrompt() {
  const { mover, anchor, position } = state.prompt;
  const { layout } = position;

  els.moverImage.src = mover.image;
  els.moverImage.alt = mover.english;
  els.anchorImage.src = anchor.image;
  els.anchorImage.alt = anchor.english;

  setAssetPosition(els.moverImage, layout.mover, layout.moverScale);
  setAssetPosition(els.anchorImage, layout.anchor, layout.anchorScale);
  setLabelPosition(els.subjectSceneLabel, labelPoint(layout.mover, layout.anchor, "subject"));
  setLabelPosition(els.referenceSceneLabel, labelPoint(layout.anchor, layout.mover, "reference"));

  els.moverImage.style.zIndex = layout.behind ? 1 : 3;
  els.anchorImage.style.zIndex = layout.behind ? 2 : 2;
  els.subjectSceneLabel.querySelector("strong").textContent = `1: ${mover.english} starts`;
  els.referenceSceneLabel.querySelector("strong").textContent = `2: ${anchor.english} follows`;

  els.moverLabel.textContent = `${mover.english}: ${mover.subjectArticle}`;
  els.anchorLabel.textContent = `${anchor.english}: ${anchor.irish} (${anchor.gender})`;
  els.positionLabel.textContent = `${position.english}: ${position.irish}`;
  els.ruleText.textContent = position.rule;

  els.answerInput.value = "";
  els.answerInput.focus();
  setFeedback("New scene ready.", "");
}

function setAssetPosition(element, point, scale = 1) {
  element.style.left = `${point[0]}%`;
  element.style.top = `${point[1]}%`;
  element.style.transform = `translate(-50%, -50%) scale(${scale})`;
}

function setLabelPosition(element, point) {
  element.style.left = `${point[0]}%`;
  element.style.top = `${point[1]}%`;
}

function labelPoint(itemPoint, otherPoint, role) {
  const horizontalPush = itemPoint[0] <= otherPoint[0] ? -14 : 14;
  const verticalPush = role === "subject" ? -16 : -12;
  const x = clamp(itemPoint[0] + horizontalPush, 16, 84);
  const y = clamp(itemPoint[1] + verticalPush, 9, 91);
  return [x, y];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setFeedback(message, type) {
  els.feedback.className = `feedback ${type}`.trim();
  els.feedback.innerHTML = `<p>${message}</p>`;
}

function checkAnswer() {
  const answer = els.answerInput.value;
  const expected = expectedSentence(state.prompt);
  const cleanAnswer = normalized(answer);
  const cleanExpected = normalized(expected);
  const fadaLooseAnswer = stripFadas(cleanAnswer);
  const fadaLooseExpected = stripFadas(cleanExpected);

  state.attempts += 1;

  if (cleanAnswer === cleanExpected) {
    state.correct += 1;
    setFeedback(`Sin é. <strong>${expected}</strong>`, "correct");
  } else if (fadaLooseAnswer === fadaLooseExpected) {
    state.correct += 1;
    setFeedback(`Correct structure. Watch the fada: <strong>${expected}</strong>`, "correct");
  } else {
    const hint = diagnose(answer, state.prompt);
    state.misses.unshift(`${state.prompt.position.irish}: ${hint.short}`);
    state.misses = state.misses.slice(0, 5);
    setFeedback(`${hint.long}<br>Expected: <strong>${expected}</strong>`, "incorrect");
  }

  renderScore();
}

function diagnose(answer, prompt) {
  const clean = normalized(answer);
  const expectedObject = objectAfterPosition(prompt.anchor, prompt.position);

  if (!clean.startsWith("tá ")) {
    return {
      short: "sentence start",
      long: "Start this pattern with <strong>Tá</strong>."
    };
  }

  if (!clean.includes(normalized(prompt.mover.subjectArticle))) {
    return {
      short: "first noun",
      long: `Use <strong>${prompt.mover.subjectArticle}</strong> for the first object.`
    };
  }

  const expectedPhrase = phraseFor(prompt.anchor, prompt.position);

  if (!clean.includes(normalized(expectedPhrase))) {
    return {
      short: "position phrase",
      long: `The position phrase here is <strong>${expectedPhrase}</strong>.`
    };
  }

  if (!clean.includes(normalized(expectedObject))) {
    return {
      short: "case or mutation",
      long: `The reference noun needs this form: <strong>${expectedObject}</strong>. ${prompt.position.rule}`
    };
  }

  return {
    short: "word order",
    long: "The pieces are close. Check the word order and spacing."
  };
}

function renderScore() {
  els.correctCount.textContent = state.correct;
  els.attemptCount.textContent = state.attempts;
  els.missList.innerHTML = state.misses.length
    ? state.misses.map((miss) => `<li>${miss}</li>`).join("")
    : "<li>No misses yet.</li>";
}

function showAnswer() {
  setFeedback(`Answer: <strong>${expectedSentence(state.prompt)}</strong>`, "");
}

function openDataDialog() {
  els.dataPreview.value = JSON.stringify({ movers, anchors, positions }, null, 2);
  els.dataDialog.showModal();
}

els.answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});

els.newPromptButton.addEventListener("click", buildPrompt);
els.showAnswerButton.addEventListener("click", showAnswer);
els.editDataButton.addEventListener("click", openDataDialog);

renderScore();
buildPrompt();
