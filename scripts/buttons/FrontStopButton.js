class FrontStopButton extends Button {
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

      document.querySelector("#stopstop").classList.remove("show");
      document.querySelector("#stoppolitie").classList.remove("show");

      clearInterval(this._flashInterval);
    } else {
      this.enable();
      this._flashing = true;
      this._flashInterval = setInterval(() => {
        this.toggle();
        if (this._enabled) {
          document.querySelector("#stopstop").classList.add("show");
          document.querySelector("#stoppolitie").classList.remove("show");
        } else {
          document.querySelector("#stopstop").classList.remove("show");
          document.querySelector("#stoppolitie").classList.add("show");
        }
      }, 1000);
    }

    this._controller.beep();
  };

  kill = () => {
    this.disable();

    document.querySelector("#stopstop").classList.remove("show");
    document.querySelector("#stoppolitie").classList.remove("show");

    this._flashing = false;

    clearInterval(this._flashInterval);
  };
}
