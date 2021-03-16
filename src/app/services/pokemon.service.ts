import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { map } from 'rxjs/operators';
import { Navigation } from '../models/navigation.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrl: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }


  getNavigation(url: string): Observable<Navigation> {
    return this.http.get<Navigation>(`${url}`);
  }

  getPokemon(id: any): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${id}`);
  }

  getPokemons(url: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${url}`).pipe(
      map((resp: any) => {
        return resp.results.map((pokemon: Pokemon) => ({
          ...pokemon,
          ...this.getIdAndImage(pokemon.url),

        }))
      })
    )
  }

  private getIdAndImage(url: string): any {
    const id = url.split('/').filter(Boolean).pop();
    return {
      id,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
  }
}
