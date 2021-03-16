import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router'
import { getStorage, setStorage } from 'src/app/utils/storage.utils';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon = {} as Pokemon;


  private pokemonId: any;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon => {
      this.pokemon = pokemon;
    })

  }

  onCollectClicked() {
    let cashedPokemons = getStorage<Pokemon[]>('user-collection');
    if (cashedPokemons) {
      cashedPokemons.push(this.pokemon);
      setStorage('user-collection', cashedPokemons)
    } else {
      setStorage('user-collection', [this.pokemon])
    }
  }

  isIncluded(): number {
    const cashedPokemons = getStorage<Pokemon[]>('user-collection');
    if (cashedPokemons) {
      return cashedPokemons.filter(p => p.id == this.pokemonId).length;
    }
    return 0;
  }
}