const router = require("express").Router();
const panelController = require("../dao/panelDao");

router.get("/mostrararduino1", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 0; i < 5; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino2", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 5; i < 10; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino3", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 10; i < 15; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino4", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 15; i < 20; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino5", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 20; i < 25; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino6", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 25; i < 30; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino7", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 30; i < 35; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino8", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 3540; i < 56; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino9", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 40; i < 45; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrararduino10", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    try {
      for (let i = 45; i < 50; i++) {
        arduino += "-" + listleds[i];
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

router.get("/mostrar", async (request, response) => {
  try {
    const imagenes = await panelController.mostrar();
    response.json(imagenes);
  } catch (error) {
    console.log(`error mostrar(routers): ${error}`);
  }
});

router.post("/mostrararduino", async (request, response) => {
  try {
    let respuesta = await panelController.mostrararduino();
    let listleds = respuesta.map(function (respuesta) {
      return respuesta.leds;
    });
    let arduino = "";
    let id = request.body.id;
    try {
      for (let i = id - 5; i < id; i++) {
        arduino += "-" + listleds[i];
        console.log(listleds[i]);
      }
    } catch (error) {
      console.log(`error mostrararduino(routers): ${error}`);
    }

    arduino = arduino.substring(1, arduino.length);
    let arduinoJSON = "";
    arduinoJSON = JSON.parse('{"leds":"' + arduino + '"}');
    response.json(arduinoJSON);
  } catch (error) {
    console.log(`error mostrararduino(routers): ${error}`);
  }
});

//insertar usuarios
router.post("/insertar", async (request, response) => {
  try {
    await panelController.insertar(request.body.nombre, request.body.leds);
    const imagenes = await panelController.mostrar();
    response.json(imagenes);
  } catch (error) {
    console.log(`error insertar(routers): ${error}`);
  }
});

router.post("/actualizar", async (request, response) => {
  try {
    await panelController.actualizar(request.body.nombre, request.body.leds);
    const imagenes = await panelController.mostrar();
    response.json(imagenes);
  } catch (error) {
    console.log(`error actualizar(routers): ${error}`);
  }
});

router.post("/eliminar", async (request, response) => {
  try {
    await panelController.eliminar(request.body.nombre);
    const imagenes = await panelController.mostrar();
    response.json(imagenes);
  } catch (error) {
    console.log(`error eliminar(routers): ${error}`);
  }
});

module.exports = router;
