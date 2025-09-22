// The Mustang function acts as a constructor for new superheroes.
function Mustang(engine, horsePower) {
    this.engine = engine;
    this.horsePower = horsePower;
}

// Methods(start and stop) are added to Mustang.prototype, ensuring they are shared across all instances.

Mustang.prototype.start = function () {
    console.log(`Mustang  is Started with ${this.engine} & ${this.horsePower}`);
}


Mustang.prototype.stop = function () {
    console.log(`Mustang is Stopped ${this.engine} & ${this.horsePower}`);
}

const ecoBoost = new Mustang("2.3L EcoBoost turbocharged 4-cylinder", 315);
const darkHorse = new Mustang(" 5.0L Coyote V8", 500);

ecoBoost.start();
ecoBoost.stop();


darkHorse.start();
darkHorse.stop();

// JavaScript uses prototypes as its core inheritance model. Even with ES6 classes, prototypes are working under the hood.