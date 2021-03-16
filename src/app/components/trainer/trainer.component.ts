import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Router } from '@angular/router'
import { getStorage } from 'src/app/utils/storage.utils';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public pokemons = [] as Pokemon[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let cashedPokemons = getStorage<Pokemon[]>('user-collection');
    if (cashedPokemons) {
      this.pokemons = cashedPokemons;
    }
  }

  goToThisPokemon(id: number) {
    this.router.navigateByUrl(`/pokemons/${id}`)
  }

}
