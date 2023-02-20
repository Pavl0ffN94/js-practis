const btn = document.getElementById("myBtn").addEventListener("click", hide);
function hide() {
  const spoiler = document.getElementById("spoiler");
  spoiler.classList.toggle("closed");
  if (spoiler.classList.contains("closed")) {
    detachhSpoilerEvents();
  } else {
    attachSpoilerEvents();
  }
}
function attachSpoilerEvents() {
  document.addEventListener("keydown", handaleEscape);
}

function detachhSpoilerEvents() {
  document.removeEventListener("keydown", handaleEscape);
}
function handaleEscape(event) {
  console.log(event);
  if (event.key === "Escape") hide();
}
