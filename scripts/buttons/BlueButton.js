class BlueButton extends Button {
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
      this._flashing = false;
      clearInterval(this._flashInterval);
      this.disable();

      document.querySelector("#blue-left").classList.remove("on");
      document.querySelector("#blue-left-glow").classList.remove("on");
      document.querySelector("#blue-right").classList.remove("on");
      document.querySelector("#blue-right-glow").classList.remove("on");

      if (this._controller._buttons["headlight"]._flashing) {
        this._controller._buttons["headlight"].stopFlashing();
        this._controller._buttons["headlight"].enable();
      }
    } else {
      this.enable();
      this._flashing = true;
      this._flashInterval = setInterval(() => {
        this.toggle();
      }, 1000);

      document.querySelector("#blue-left").classList.add("on");
      document.querySelector("#blue-left-glow").classList.add("on");
      document.querySelector("#blue-right").classList.add("on");
      document.querySelector("#blue-right-glow").classList.add("on");

      if (this._controller._buttons["headlight"]._flashOnBlue) {
        this._controller._buttons["headlight"].enable();
        this._controller._buttons["headlight"].startFlashing();
      }
    }
    this._controller.beep();
  };

  kill = () => {
    this.disable();

    document.querySelector("#blue-left").classList.remove("on");
    document.querySelector("#blue-left-glow").classList.remove("on");
    document.querySelector("#blue-right").classList.remove("on");
    document.querySelector("#blue-right-glow").classList.remove("on");

    this._flashing = false;

    clearInterval(this._flashInterval);
  };
}
