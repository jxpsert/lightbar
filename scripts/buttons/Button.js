class Button {
  _element = null;
  _enabled = false;
  _powered = false;

  constructor(element) {
    this._element = element;
  }

  enable = () => {
    this._element.classList.add("on");
    this._enabled = true;
  };

  disable = () => {
    this._element.classList.remove("on");
    this._enabled = false;
  };

  toggle = () => {
    if (this._element.classList.contains("on")) {
      this.disable();
    } else {
      this.enable();
    }
  };

  enablePower = () => {
    this._element.classList.add("powered");
    this._powered = true;
  };

  disablePower = () => {
    this._element.classList.remove("powered");
    this._powered = false;

    this.kill();
  };

  kill = () => {
    // Override this
  };
}
