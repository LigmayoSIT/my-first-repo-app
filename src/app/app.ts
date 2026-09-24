import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainerDisplay } from './trainer-display/trainer-display';
import { KantoRegion } from './pokemon-gym-leaders/kanto-region/kanto-region';
import { JohtoRegion } from './pokemon-gym-leaders/johto-region/johto-region';

@Component({
  imports: [RouterOutlet, TrainerDisplay, KantoRegion, JohtoRegion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Hello GitHub! This is my first Angular push.';
}
