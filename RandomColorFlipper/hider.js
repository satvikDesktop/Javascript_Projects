const targetDiv = document.getElementById("how2");
const btn = document.getElementById("toggle");
targetDiv.style.display = "none";
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};