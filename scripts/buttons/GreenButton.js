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
      this._flashing = false;
      clearInterval(this._flashInterval);
    } else {
      this.enable();
      this._flashing = true;
      this._flashInterval = setInterval(() => {
        this.toggle();
      }, 1000);
    }
    this._controller.beep();
  };

  kill = () => {
    this.disable();
    clearInterval(this._flashInterval);
  };
}
