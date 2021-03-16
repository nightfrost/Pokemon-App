import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { LoginComponent } from './components/login/login.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pokemons',
    component: CatalogueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trainer',
    component: TrainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pokemons/:id',
    component: PokemonDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
