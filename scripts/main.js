const controller = new Controller();
controller._beep = document.querySelector("#beep");
controller._longbeep = document.querySelector("#longbeep");
controller._siren = document.querySelector("#sirenaudio");

controller._longbeep.volume = 0.25;
controller._siren.volume = 0.1;

controller.registerButton(
  "power",
  new PowerButton(controller, document.querySelector("#power"))
);

controller.registerButton(
  "blue",
  new BlueButton(controller, document.querySelector("#blue"))
);

controller.registerButton(
  "amber",
  new AmberButton(controller, document.querySelector("#amber"))
);

controller.registerButton(
  "green",
  new GreenButton(controller, document.querySelector("#green"))
);

controller.registerButton(
  "follow",
  new IdleStopButton(controller, document.querySelector("#volg"))
);

controller.registerButton(
  "stopback",
  new IdleStopButton(controller, document.querySelector("#stopback"))
);

controller.registerButton(
  "stopfront",
  new FrontStopButton(controller, document.querySelector("#stopfront"))
);

controller.registerButton(
  "headlight",
  new HeadlightButton(controller, document.querySelector("#headlight"))
);

controller.registerButton(
  "siren",
  new SirenButton(controller, document.querySelector("#siren"))
);

controller.registerButton(
  "left",
  new LeftLightButton(controller, document.querySelector("#leftlight"))
);

controller.registerButton(
  "right",
  new RightLightButton(controller, document.querySelector("#rightlight"))
);

controller.registerButton(
  "front",
  new FrontLightButton(controller, document.querySelector("#frontlight"))
);
