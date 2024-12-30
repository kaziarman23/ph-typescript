"use strict";
{
    // oop - class
    class Animel {
        constructor(name, category, sound) {
            this.name = name;
            this.category = category;
            this.sound = sound;
        }
        makeSound() {
            console.log(`This ${this.category} sound like ${this.sound}`);
        }
    }
    const bazz = new Animel("bazz", "dog", "ghew ghew");
    const tom = new Animel("tom", "cat", "mew mew");
    bazz.makeSound();
    tom.makeSound();
}
