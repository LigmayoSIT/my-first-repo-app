import { Service, Injectable, signal } from '@angular/core';

@Service()
export class TrainerService {
    private registry = signal([
        {
            name: 'Ash Ketchum',
            team: ['Pikachu', 'Charizard'],
            items: ['Light Ball', 'Charizardite Y']
        }
        {
            name: 'Misty',
            team: ['Starmie', 'Psyduck', 'Gyarados'],
            items: ['Mystic Water', 'None', 'Gyaradosite']
        }
        {
            name: 'Cynthia',
            team: ['Spiritomb', 'Roserade', 'Togekiss'],
            item: ['Leftovers', 'Focus Sash', 'Sitrus Berry']
        }
        {
            name: 'Serena',
            team: ['Delphox', 'Pancham', 'Sylveon'],
            item: ['None'. 'Sunglasses', 'None']
        }
        {
            name: 'Marnie',
            team: ['Liepard', 'Toxicroak', 'Scrafty'],
            items:['None', 'None', 'None']
        }
    ])
    trainers = this.registry.asReadonly();
}
