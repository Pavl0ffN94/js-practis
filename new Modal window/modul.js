class Modal {
  constructor(text = "error") {
    this.text = text;
    this.init;
  }
  init() {
    this.createMarkup();
    this.modal = document.getElementById("myModal");
    this.closeBtn = this.modal.querySelector(".close");
    this.attachEvents();
  }

  createMarkup() {
    console.log("afasfjasf");
    document.body.insertAdjacentHTML(
      "beforeend",
      `
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>${this.text}</p>
      </div>
    </div>`,
    );
  }
  attachEvents() {
    this.closeFn = this.closeFn.bind(this);

    this.closeBtn.addEventListener("click", this.closeFn);
  }
  closeFn() {
    this.modal.remove();
    this.modal = null;
  }
}
