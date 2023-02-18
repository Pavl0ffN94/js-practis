const btn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
btn.addEventListener("click", openModal);
function openModal() {
  modal.classList.add("open");
  attachModalEvents();
}
function attachModalEvents() {
  modal.querySelector(".close").addEventListener("click", closeModal);
  document.addEventListener("keydown", handelEscape);
  modal.addEventListener("click", handleOutside);
}
function handleOutside(event) {
  const isClickOutside = !!event.target.closest(".modal-content");
  if (!isClickOutside) {
    closeModal();
  }
}

function handelEscape(event) {
  console.log(event.key);
  if (event.key === "Escape") {
    closeModal();
  }
}

function closeModal() {
  modal.classList.remove("open");
  detachVodalEvents();
}
function detachVodalEvents() {
  modal.querySelector(".close").removeEventListener("click", closeModal);
  document.removeEventListener("keydown", handelEscape);
  modal.removeEventListener("click", handleOutside);
}
