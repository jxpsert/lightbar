class HeadlightButton extends Button {
  _controller = null;
  _flashing = false;
  _flashInterval = null;

  _flashOnBlue = true;

  constructor(controller, element) {
    super(element);
    this._controller = controller;
    this._element.addEventListener("click", this.click);
  }

  click = () => {
    if (!this._controller._enabled) return;

    if (this._flashing) {
      this.toggleFlash();
      this._flashOnBlue = false;
    } else {
      this._flashOnBlue = !this._flashOnBlue;
      this.toggle();
    }

    this._controller.beep();
  };

  toggleFlash = () => {
    if (this._flashing) {
      this.stopFlashing();
    } else {
      this.startFlashing();
    }
  };

  stopFlashing = () => {
    this._flashing = false;
    clearInterval(this._flashInterval);
    this.disable();
  };

  startFlashing = () => {
    this._flashing = true;
    this._flashInterval = setInterval(() => {
      this.toggle();
    }, 1000);
  };

  kill = () => {
    this.disable();
    clearInterval(this._flashInterval);
  };
}
