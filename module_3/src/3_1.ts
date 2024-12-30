{
  // oop - class

  class Animel {
    constructor(
      public name: string,
      public category: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`This ${this.category} sound like ${this.sound}`);
    }
  }

  const bazz = new Animel("bazz", "dog", "ghew ghew");
  const tom = new Animel("tom", "cat", "mew mew");

  bazz.makeSound()
  tom.makeSound()
}
