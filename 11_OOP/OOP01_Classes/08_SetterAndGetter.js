//Try creating a class for a `Car` with properties like `model` and `speed`. Add getters to format the model name (e.g., capitalize it) and setters to ensure speed isn’t set to a negative value. This will help you understand how getters and setters work in real code! 

class Car {
    #model
    #speed

    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    set model(model) {
        if (typeof model === "string") {
            this.#model = model.trim().toUpperCase();
        } else {
            console.log("car model should be string only");
        }
    }

    get model() {
        return this.#model;
    }

    set speed(speed) {
        if (typeof speed === "number" && speed > 0) {
            this.#speed = speed.toFixed(2);
        } else {
            console.log("car speed should be number only");
        }
    }

    get speed() {
        return this.#speed;
    }
}

const mustang = new Car("Mustang GT", 350);
console.log(mustang.model);
console.log(mustang.speed);