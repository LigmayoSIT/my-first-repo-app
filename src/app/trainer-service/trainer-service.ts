import { Component, Injectable, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-trainer-service',
  styleUrl: './trainer-service.css',
  templateUrl: './trainer-service.html',
})
export class TrainerService {
  private registry = signal([
    {
      name: 'Ash Ketchum',
      team: {'Pikachu', 'Charizard'},
      item: {'Light Ball', 'Charizardite Y'}
    }
  ])

  trainers = this.registry.asReadOnly();
}
