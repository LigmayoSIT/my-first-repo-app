import { Component } from '@angular/core';
import { KantoRegion } from './pokemon-gym-leaders/kanto-region/kanto-region';
import { JohtoRegion } from './pokemon-gym-leaders/johto-region/johto-region';

@Component({
  imports: [KantoRegion, JohtoRegion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
