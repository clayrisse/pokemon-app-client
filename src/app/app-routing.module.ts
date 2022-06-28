import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardTrainerComponent } from './components/card-trainer/card-trainer.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'trainer', component: TrainersComponent},
  {path: 'trainer/:username', component: TrainerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
