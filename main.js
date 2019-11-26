

class Trainer {
  constructor(name){
    this.name = name
    this.pokemon = []
  }
  
  all() {
    return this.pokemon
  }
  
  get(name) {
    return name
   
  }
  
  addPokemon(pokemon) {
    this.pokemon.push(pokemon)
    return `${pokemon.name} has been added!`
  }
};


class Pokemon {
  constructor(poke){
    this.queryPokemonApi(poke).then(pokemon => {
    this.name = pokemon.name
    this.type  = pokemon.types.map( type => type.type.name)
    this.hp = pokemon.stats[5].base_stat
    this.atk = pokemon.stats[5].base_stat
    this.def = pokemon.stats[3].base_stat
    this.abilities = pokemon.abilities.map( ability => ability.ability.name)
    })

  }
  
  queryPokemonApi = async(i) => {
      let res = await fetch(`https://fizal.me/pokeapi/api/${i}.json`);
      let data = await res.json();    
      return data;
  }
}

function clickmeLeft(){
  var display = document.getElementsByClassName("back_pokedex_left")[0].style.display;
  if (display == 'block'){
    document.getElementsByClassName("back_pokedex_left")[0].style.display = 'none';
  }else{
    document.getElementsByClassName("back_pokedex_left")[0].style.display = 'block';
  }


}


function clickmeCenter(){
  var display =(document.getElementsByClassName("back_pokedex_center")[0].style.display);
  if (display == 'block'){
    document.getElementsByClassName("back_pokedex_center")[0].style.display = 'none';
  }else{
    document.getElementsByClassName("back_pokedex_center")[0].style.display = 'block';
  }


}


function clickmeRight(){
  var display =(document.getElementsByClassName("back_pokedex_right")[0].style.display);
  if (display == 'block'){
    document.getElementsByClassName("back_pokedex_right")[0].style.display = 'none';
  }else{
    document.getElementsByClassName("back_pokedex_right")[0].style.display = 'block';
  }


}

var trainer = new Trainer('Juan');
trainer.addPokemon(new Pokemon(2));
trainer.addPokemon(new Pokemon(12));
trainer.addPokemon(new Pokemon(90));

// wait for pokeapi query to finish
setTimeout(() => {
  let pokemon = trainer.all();
  let stats = document.getElementsByClassName('pokemon-stat');
  stats[0].innerHTML = `Name: ${pokemon[0].name}`
  stats[1].innerHTML = `Type: ${pokemon[0].type}`
  stats[2].innerHTML = `HP: ${pokemon[0].hp}`
  stats[3].innerHTML = `Atk: ${pokemon[0].atk}`
  stats[4].innerHTML = `Def: ${pokemon[0].def}`
  stats[5].innerHTML = `Abilities: ${pokemon[0].abilities}`
}, 200);