import { Component, input, output } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-pokemon-input-output',
  styleUrl: './pokemon-input-output.css',
  templateUrl: './pokemon-input-output.html',
})
export class PokemonInputOutput {
  //Inputs
  name = input.required<string>();
  status = input<string>('Pokemon Trainer');
  //Outputs
  statusConfirmed = output<string>();
  //Method
  markConfirmed(){
    this.statusConfirmed.emit(this.name());
  }
}