class FrontLightButton extends Button {
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

    if (this._enabled) {
      document.querySelector("#white-front").classList.add("on");
      document.querySelector("#white-front-left-glow").classList.add("on");
      document.querySelector("#white-front-right-glow").classList.add("on");
    } else {
      document.querySelector("#white-front").classList.remove("on");
      document.querySelector("#white-front-left-glow").classList.remove("on");
      document.querySelector("#white-front-right-glow").classList.remove("on");
    }

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
    document.querySelector("#white-front").classList.remove("on");
    document.querySelector("#white-front-left-glow").classList.remove("on");
    document.querySelector("#white-front-right-glow").classList.remove("on");

    this._flashing = false;

    clearInterval(this._flashInterval);
  };
}
