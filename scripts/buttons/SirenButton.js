class SirenButton extends Button {
  _controller = null;
  _flashing = false;
  _flashInterval = null;

  _disableBlueOnStop = true;

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
      if (this._disableBlueOnStop) {
        this._controller._buttons["blue"].click();
      }

      this._controller.siren(false);
    } else {
      this._flashing = true;
      this._flashInterval = setInterval(() => {
        this.toggle();
      }, 1000);

      if (!this._controller._buttons["blue"]._flashing) {
        this._controller._buttons["blue"].click();
        this._disableBlueOnStop = true;
      } else {
        this._disableBlueOnStop = false;
      }

      this._controller.siren(true);
    }

    this._controller.beep();
  };

  kill = () => {
    this.disable();
    clearInterval(this._flashInterval);
    this._flashing = false;
  };
}
