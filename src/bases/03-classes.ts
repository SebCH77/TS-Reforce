import axios from "axios";

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

  async getMoves() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/4");
    return data.moves;
  }

  constructor(public readonly id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}

export const charmander = new Pokemon(4, "Charmander");
charmander.getMoves();
