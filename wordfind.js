const words = ["LATTE", "BREW", "AROMA", "BEAN", "ROAST"];
const gridSize = 8;
const grid = document.getElementById("grid");
const message = document.getElementById("message");

let foundWords = [];

function generateGrid() {
  const gridLetters = Array.from({ length: gridSize * gridSize }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );

  // Place words horizontally or vertically
  words.forEach(word => {
    let placed = false;
    while (!placed) {
      const dir = Math.random() > 0.5 ? 'H' : 'V';
      const row = Math.floor(Math.random() * (dir === 'H' ? gridSize : gridSize - word.length));
      const col = Math.floor(Math.random() * (dir === 'V' ? gridSize : gridSize - word.length));
      let fits = true;
      for (let i = 0; i < word.length; i++) {
        const index = dir === 'H'
          ? row * gridSize + (col + i)
          : (row + i) * gridSize + col;
        if (gridLetters[index] !== undefined && gridLetters[index] !== word[i]) {
          fits = false;
          break;
        }
      }
      if (fits) {
        for (let i = 0; i < word.length; i++) {
          const index = dir === 'H'
            ? row * gridSize + (col + i)
            : (row + i) * gridSize + col;
          gridLetters[index] = word[i];
        }
        placed = true;
      }
    }
  });

  gridLetters.forEach((char, index) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = char;
    cell.dataset.index = index;
    cell.addEventListener("click", () => selectCell(cell));
    grid.appendChild(cell);
  });
}

let selection = "";

function selectCell(cell) {
  cell.classList.toggle("selected");
  selection += cell.textContent;
  checkWord(selection);
}

function checkWord(str) {
  if (words.includes(str)) {
    document.querySelectorAll(".selected").forEach(c => {
      c.classList.remove("selected");
      c.classList.add("found");
    });
    foundWords.push(str);
    selection = "";
    if (foundWords.length === words.length) {
      message.textContent = "🎉 You found all the words!";
    }
  } else if (str.length > 6) {
    selection = "";
    document.querySelectorAll(".selected").forEach(c => c.classList.remove("selected"));
  }
}

generateGrid();
