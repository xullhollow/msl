
// A basic placeholder JS simulating word-finder logic
const WORDS = ["LATTE", "BREW", "AROMA", "CAFÉ", "MAIN"];
document.getElementById("word-list").innerHTML = "<b>Words:</b> " + WORDS.join(", ");
const canvas = document.getElementById("canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#ffeedb";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#222";
ctx.fillText("Grid Coming Soon...", 120, 200);
