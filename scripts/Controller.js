class Controller {
  _buttons = {
    power: null,
    headlight: null,
    left: null,
    right: null,
    front: null,
    stopback: null,
    stopfront: null,
    follow: null,
    amber: null,
    green: null,
    siren: null,
    blue: null,
  };

  _enabled = false;
  _beep = null;
  _longbeep = null;
  _siren = null;

  _longBeepInterval = null;

  constructor() {
    this._longBeepInterval = setInterval(() => {
      if (
        this._buttons["stopback"]._flashing ||
        this._buttons["stopfront"]._flashing ||
        this._buttons["follow"]._flashing
      ) {
        this.longBeep();
      }
    }, 2000);
  }

  toggle = () => {
    if (this._enabled) {
      this._enabled = false;
      this.allOff();
    } else if (!this._enabled) {
      this._enabled = true;
      this.allOn();
      this._buttons["headlight"].enable();
    }
  };

  pressButton = (buttonName) => {
    this._buttons[buttonName].click();
  };

  registerButton = (buttonName, button) => {
    this._buttons[buttonName] = button;
  };

  beep = () => {
    let newBeep = this._beep.cloneNode();
    newBeep.volume = 0.25;
    document.body.appendChild(newBeep);

    newBeep.play();
    setTimeout(() => {
      newBeep.remove();
    }, 2000);
  };

  longBeep = () => {
    this._longbeep.play();
  };

  siren = (enable) => {
    if (enable) {
      this._siren.play();
    } else {
      this._siren.pause();
    }
  };

  allOff = () => {
    this._buttons["headlight"].disablePower();
    this._buttons["left"].disablePower();
    this._buttons["right"].disablePower();
    this._buttons["front"].disablePower();
    this._buttons["stopback"].disablePower();
    this._buttons["stopfront"].disablePower();
    this._buttons["follow"].disablePower();
    this._buttons["amber"].disablePower();
    this._buttons["green"].disablePower();
    this._buttons["siren"].disablePower();
    this._buttons["blue"].disablePower();

    this._siren.pause();
  };

  allOn = () => {
    this._buttons["headlight"].enablePower();
    this._buttons["left"].enablePower();
    this._buttons["right"].enablePower();
    this._buttons["front"].enablePower();
    this._buttons["stopback"].enablePower();
    this._buttons["stopfront"].enablePower();
    this._buttons["follow"].enablePower();
    this._buttons["amber"].enablePower();
    this._buttons["green"].enablePower();
    this._buttons["siren"].enablePower();
    this._buttons["blue"].enablePower();
  };
}
