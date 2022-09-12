export class Pokemon {
  get imageUrl(): string {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  constructor(public readonly id: number, public name: string) {
    this.id = id;
    this.name = name;

    console.log("Constructor llamado");
  }
}

export const charmander = new Pokemon(4, "Charmander");
console.log("🚀 ~ file: 03-classes.ts ~ line 27 ~ charmander", charmander);

charmander.scream();
