import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { CardPokedexComponent } from './components/card-pokedex/card-pokedex.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamsComponent } from './components/teams/teams.component';
import { CardTrainerComponent } from './components/card-trainer/card-trainer.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    CardPokedexComponent,
    HeaderComponent,
    TeamsComponent,
    CardTrainerComponent,
    TrainersComponent,
    AddTrainerComponent,
    TeamCardComponent,
    TrainerPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
