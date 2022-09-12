export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const pokemon: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
  age: 1,
};

export const pokemons: Pokemon[] = [];
console.log("🚀 ~ file: 02-objects.ts ~ line 21 ~ pokemons", pokemons);

pokemons.push(pokemon, charmander);
