import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { LoginComponent } from './components/login/login.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    LoginComponent,
    TrainerComponent,
    CatalogueComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
