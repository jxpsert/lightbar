class PowerButton extends Button {
  _controller = null;

  constructor(controller, element) {
    super(element);
    this._controller = controller;
    this._element.addEventListener("click", this.click);
  }

  click = () => {
    this._controller.toggle();
    this.toggle();

    this._controller.beep();
  };
}
