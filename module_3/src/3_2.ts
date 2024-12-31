{
  // oop - Inharatance

  class Player {
    constructor(
      public name: string,
      public age: string,
      public gender: string
    ) {}

    playerDetails() {
      console.log(
        `${this.name} is a grate ${this.gender} player.${this.name} is ${this.age} years old.`
      );
    }
  }

  class Cricketer extends Player {
    constructor(
      public name: string,
      public age: string,
      public gender: string,
      public sport: string,
      public score: number
    ) {
      super(name, age, gender);
    }

    cricketCareer() {
      console.log(
        `${this.name} is a grate ${this.sport}. His highest score is ${this.score}`
      );
    }
  }

  class Footballer extends Player {
    constructor(
      public name: string,
      public age: string,
      public gender: string,
      public sport: string,
      public score: number,
      public worldCup: number
    ) {
      super(name, age, gender);
    }

    footballCareer() {
      console.log(
        `${this.name} is a grate ${this.sport}. His highest score is ${this.score}.And also he have a ${this.worldCup} worldCup`
      );
    }
  }

  const sakib = new Cricketer("sakib", "25", "male", "cricketer", 5000);
  const messi = new Footballer("messi", "30", "male", "footballer", 700, 1);

  sakib.cricketCareer();
  messi.footballCareer();
}
