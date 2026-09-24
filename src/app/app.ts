import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainerDisplay } from './trainer-display/trainer-display';
import { KantoRegion } from './pokemon-gym-leaders/kanto-region/kanto-region';
import { JohtoRegion } from './pokemon-gym-leaders/johto-region/johto-region';
import { PokemonInputOutput } from './pokemon-input-output/pokemon-input-output';

@Component({
  imports: [RouterOutlet, TrainerDisplay, KantoRegion, JohtoRegion, PokemonInputOutput],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true
})
export class App {
  title = 'Hello GitHub! This is my first Angular push.';

  //Trainer Data (Test)
  trainerNames = [
    {name: 'Ash Ketchum', section: 'Pallet Town'},
    {name: 'Misty', section: 'Cerulean City'},
    {name: 'Brock', section: 'Pewter City'}
  ];
  //State Message
  message = signal('Please Choose a Trainer List');
  //Event Handler
  markConfirmed(trainerName: string) {
    this.message.set(`Trainer ${trainerName} list chosen.`);
  }
}
