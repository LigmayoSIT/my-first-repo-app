import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainerDisplay } from './trainer-display/trainer-display'

@Component({
  imports: [RouterOutlet, TrainerDisplay],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = 'Hello GitHub! This is my first Angular push.';
}
