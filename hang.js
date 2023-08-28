// Letters
const letter = "ابتثجحخدذرزسشصضطظعغفقكلمنهويى";
let lettersArray = Array.from(letter);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theletter = document.createTextNode(letter);
  span.appendChild(theletter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
let words = {
  رياضة: [
    "ميسى",
    "كريستيانو",
    "محمد صلاح",
    "نيمار",
    "بنزيما",
    "الاهلى",
    "برشلونه",
    "ريال مدريد",
    "ليفربول",
    "مانشستر سيتى",
    "ارسنال",
    "باريس سان جيرمان",
    "بايرن ميونخ",
    "ليدز",
  ],
  الفيلم: [
    "عسل اسود",
    "افريكانو",
    "اللمبى",
    "صاحب صاحبه",
    "المركب",
    "الجزيره",
    "الرهينه",
    "امير البحار",
    "وش اجرام",
    "تيتو",
    "الديلر",
    "مطب صناعى",
    "ظرف طارق",
  ],
  اغاني: [
    "كتاب حياتى",
    "رجعت من الصفر",
    "انا مش عارفنى",
    "خليك معايا",
    "خليك فاكرنى",
    "عرفت الى فيها",
    "جبار",
    "لو كان ده حب",
    "يوم ورا يوم",
    "الف ليله و ليله",
    "قطر الحياه",
  ],
  بلاد: [
    "مصر",
    "المغرب",
    "الكويت",
    "ليبيا",
    "ايطاليا",
    "انجلترا",
    "فرنسا",
    "اليابان",
    "الصين",
    "الهند",
    "اندونيسيا",
    "امريكا",
    "الارجنتين",
    "البرازيل",
    "كندا",
    "استراليا",
    "ايسلاندا",
    "الاسكندريه",
  ],
  ممثل: [
    "احمد السقا",
    "احمد عز",
    "مصطفي خاطر",
    "اشرف عبد الباقي",
    "محمد هنيدي",
    "حمدي المرغني",
    "مصطفي شعبان",
    "كريم عبد العزيز",
    "عمرو سعد",
    "محمد سعد",
    "علي ربيع",
    "عبد الرحمن توتة",
  ],
};
let allkeys = Object.keys(words);
let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randomPropName = allkeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let letterguesscontainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach((letter) => {
  let emptyspan = document.createElement("span");

  if (letter === " ") {
    emptyspan.className = "with-space";
  }
  letterguesscontainer.appendChild(emptyspan);
});
let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let theclickedletter = e.target.innerHTML.toLowerCase();

    let thechosenword = Array.from(randomValueValue.toLowerCase());

    lettersAndSpace.forEach((wordLetter, wordindex) => {
      if (theclickedletter === wordLetter) {
        theStatus = true;
        guessSpans.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theclickedletter;
          }
        });
      }
    });
  }
  if (theStatus !== true) {
    wrongAttempts++;
    theDraw.classList.add(`wrong-${wrongAttempts}`);
    if (wrongAttempts === 8) {
      endgame();
      lettersContainer.classList.add("finished");
    }
  }
});
function endgame() {
  let div = document.createElement("div");
  let divtext = document.createTextNode(
    `GG العب تاني  الكلمه:${randomValueValue}`
  );
  div.appendChild(divtext);

  div.className = "popup";
  let restartButton = document.createElement("span");
  let restartButtonText = document.createTextNode("العب تانى");
  restartButton.appendChild(restartButtonText);
  restartButton.className = "restart";
  div.appendChild(restartButton);
  restartButton.addEventListener("click", (res) => {
    if (res.target.className === "restart") {
      window.location.reload();
    }
  });
  document.body.appendChild(div);
}
