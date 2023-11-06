class RightLightButton extends Button {
  _controller = null;
  _flashing = false;

  constructor(controller, element) {
    super(element);
    this._controller = controller;
    this._element.addEventListener("click", this.click);
  }

  click = () => {
    if (!this._controller._enabled) return;

    this.toggle();
    this._controller.beep();

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
  };

  kill = () => {
    this.disable();

    this._flashing = false;

    clearInterval(this._flashInterval);
  };
}
