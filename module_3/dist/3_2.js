"use strict";
{
    // oop - Inharatance
    class Player {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        playerDetails() {
            console.log(`${this.name} is a grate ${this.gender} player.${this.name} is ${this.age} years old.`);
        }
    }
    class Cricketer extends Player {
        constructor(name, age, gender, sport, score) {
            super(name, age, gender);
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.sport = sport;
            this.score = score;
        }
        cricketCareer() {
            console.log(`${this.name} is a grate ${this.sport}. His highest score is ${this.score}`);
        }
    }
    class Footballer extends Player {
        constructor(name, age, gender, sport, score, worldCup) {
            super(name, age, gender);
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.sport = sport;
            this.score = score;
            this.worldCup = worldCup;
        }
        footballCareer() {
            console.log(`${this.name} is a grate ${this.sport}. His highest score is ${this.score}.And also he have a ${this.worldCup} worldCup`);
        }
    }
    const sakib = new Cricketer("sakib", "25", "male", "cricketer", 5000);
    const messi = new Footballer("messi", "30", "male", "footballer", 700, 1);
    sakib.cricketCareer();
    messi.footballCareer();
}
