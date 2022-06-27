import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CardPokedexComponent } from './components/card-pokedex/card-pokedex.component';
import { HeaderComponent } from './components/header/header.component';
import { CardTeamComponent } from './components/card-team/card-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CardTrainerComponent } from './components/card-trainer/card-trainer.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    CardPokedexComponent,
    HeaderComponent,
    CardTeamComponent,
    TeamsComponent,
    CardTrainerComponent,
    TrainersComponent,
    AddTrainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
