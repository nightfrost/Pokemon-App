import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Router } from '@angular/router'
import { Navigation } from 'src/app/models/navigation.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  pokemons = [] as Pokemon[];
  private pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  public navigation = {} as Navigation

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {

    this.fetchAndSetNavigation(this.pokemonUrl)
    this.pokemonService.getPokemons(this.pokemonUrl).subscribe(pokemons => {
      this.pokemons = pokemons;
    });

    this.fetchAndSetPokemons(this.pokemonUrl)

  }
  goToThisPokemon(id: number) {
    this.router.navigateByUrl(`/pokemons/${id}`)
  }

  next() {

    if (this.navigation.next) {
      this.fetchAndSetPokemons(this.navigation.next)
      this.fetchAndSetNavigation(this.navigation.next)
    }
  }

  previous() {
    if (this.navigation.previous) {
      this.fetchAndSetPokemons(this.navigation.previous)
      this.fetchAndSetNavigation(this.navigation.previous)
    }
  }

  fetchAndSetPokemons(url: string) {
    this.pokemonService.getPokemons(url).subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  fetchAndSetNavigation(url: string) {
    this.pokemonService.getNavigation(url).subscribe(navigation => {
      this.navigation = navigation
    });
  }

}