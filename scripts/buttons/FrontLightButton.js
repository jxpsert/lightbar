class FrontLightButton extends Button {
  _controller = null;

  constructor(controller, element) {
    super(element);
    this._controller = controller;
    this._element.addEventListener("click", this.click);
  }

  click = () => {
    this.toggle();
    this._controller.beep();
  };

  kill = () => {
    this.disable();
  };
}
