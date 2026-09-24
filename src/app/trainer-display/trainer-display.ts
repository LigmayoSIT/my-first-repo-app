import { Component, inject } from '@angular/core';
import { TrainerService } from './trainer.service';

@Component({
  selector: 'app-trainer-display',
  standalone: true,
  template
})
export class TrainerDisplay {
  trainerService = inject(TrainerService);
}
