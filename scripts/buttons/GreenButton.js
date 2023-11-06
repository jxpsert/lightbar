class GreenButton extends Button {
  _controller = null;
  _flashing = false;
  _flashInterval = null;

  constructor(controller, element) {
    super(element);
    this._controller = controller;
    this._element.addEventListener("click", this.click);
  }

  click = () => {
    if (!this._controller._enabled) return;

    if (this._flashing) {
      this.disable();

      document.querySelector("#green-left").classList.remove("on");
      document.querySelector("#green-left-glow").classList.remove("on");

      this._flashing = false;
      clearInterval(this._flashInterval);
    } else {
      this.enable();
      this._flashing = true;
      this._flashInterval = setInterval(() => {
        this.toggle();
      }, 1000);

      document.querySelector("#green-left").classList.add("on");
      document.querySelector("#green-left-glow").classList.add("on");
    }
    this._controller.beep();
  };

  kill = () => {
    this.disable();

    document.querySelector("#green-left").classList.remove("on");
    document.querySelector("#green-left-glow").classList.remove("on");

    clearInterval(this._flashInterval);
  };
}
