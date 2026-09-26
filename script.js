// =========================
// PAGE 1 → PAGE 2
// =========================

function showPage2() {

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  if (!page1 || !page2) {
    console.log("Page 1 or Page 2 not found");
    return;
  }

  page1.classList.add("hide");

  createHearts();

  setTimeout(function () {

    page2.classList.add("show");

    page2.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 700);
}


// =========================
// FLOATING HEARTS
// =========================

function createHearts() {

  const container =
    document.getElementById("hearts");

  if (!container) {
    return;
  }

  for (let i = 0; i < 25; i++) {

    const heart =
      document.createElement("div");

    heart.className =
      "floating-heart";

    heart.innerHTML =
      "❤️";

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    heart.style.animationDelay =
      Math.random() * 2 + "s";

    container.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 6000);
  }
}


// =========================
// PAGE NAVIGATION
// =========================

function goToPage(pageId) {

  const page =
    document.getElementById(pageId);

  if (!page) {
    console.log("Page not found: " + pageId);
    return;
  }

  page.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  // Start Page 4 typing

  if (pageId === "page4") {

    setTimeout(function () {
      startTyping();
    }, 700);

  }
}


// =========================
// PAGE 4 TYPING MESSAGE
// =========================

const loveLines = [

  "You deserve to be loved without ever having to question it.",

  "You deserve someone who listens to you and truly cares about your heart.",

  "You deserve happiness, peace, respect, and all the beautiful things life can bring.",

  "And Chooti Duu, you deserve to know every single day just how special you are to me. ❤️"

];


let currentLine = 0;

let typingStarted = false;


// =========================
// TYPE ONE LINE
// =========================

function typeLine(text, element, callback) {

  let index = 0;

  function type() {

    if (index < text.length) {

      element.textContent +=
        text.charAt(index);

      index++;

      setTimeout(type, 40);

    } else {

      setTimeout(callback, 600);

    }

  }

  type();
}


// =========================
// START TYPING
// =========================

function startTyping() {

  if (typingStarted) {
    return;
  }

  typingStarted = true;

  typeNextLine();
}


// =========================
// NEXT LINE
// =========================

function typeNextLine() {

  if (currentLine >= loveLines.length) {
    return;
  }

  const element =
    document.getElementById(
      "line" + (currentLine + 1)
    );

  if (!element) {
    return;
  }

  typeLine(
    loveLines[currentLine],
    element,
    function () {

      currentLine++;

      typeNextLine();

    }
  );
}


// =========================
// FINAL SURPRISE
// =========================

function showFinalSurprise() {

  const heart =
    document.getElementById("surpriseHeart");

  const button =
    document.querySelector(".heart-button");

  const surprise =
    document.getElementById("hiddenSurprise");


  if (heart) {

    heart.style.transform =
      "scale(1.35)";

    setTimeout(function () {

      heart.style.transform =
        "scale(1)";

    }, 500);

  }


  if (button) {

    button.classList.add("clicked");

    setTimeout(function () {

      button.classList.remove("clicked");

    }, 800);

  }


  if (surprise) {

    surprise.classList.add("show");

  }


  createFinalHearts();

}


// =========================
// FINAL FLOATING HEARTS
// =========================

function createFinalHearts() {

  const container =
    document.getElementById("hearts");

  if (!container) {
    return;
  }

  for (let i = 0; i < 30; i++) {

    const heart =
      document.createElement("div");

    heart.className =
      "floating-heart";

    heart.innerHTML =
      Math.random() > 0.5
        ? "❤️"
        : "♡";

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    heart.style.animationDelay =
      Math.random() * 1.5 + "s";

    container.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 7000);

  }

}
