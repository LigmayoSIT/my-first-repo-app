import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-kanto-region',
  styleUrl: './kanto-region.css',
  templateUrl: './kanto-region.html',
})
export class KantoRegion {
  gymleaders = signal([
    {name: 'Brock', portrait: 'brock.png', location: 'Pewter City', pokemonteam: 'Geodude, Onix',
        pokemonlevels: 'RB: Geodude Lv. 12, Onix Lv. 14 | Y: Geodude Lv. 10, Onix Lv. 12 | FRLG: Geodude Lv. 12, Onix Lv. 14',
        badge: 'Boulder Badge'},

    {name: 'Misty', portrait: 'misty.png', location: 'Cerulean City', pokemonteam: 'Staryu, Starmie',
        pokemonlevels: 'RB: Staryu Lv. 18, Starmie Lv. 21 | Y: Psyduck Lv. 18, Horsea Lv. 18, Staryu Lv. 21, Starmie Lv. 22 | FRLG: Staryu Lv. 18, Starmie Lv. 21',
        badge: 'Cascade Badge'},

    {name: 'Lt. Surge', portrait: 'lt-surge.png', location: 'Vermilion City', pokemonteam: 'Voltorb, Pikachu, Raichu',
        pokemonlevels: 'RB: Voltorb Lv. 21, Pikachu Lv. 18, Raichu Lv. 24 | Y: Raichu Lv. 28 | FRLG: Voltorb Lv. 21, Pikachu Lv. 18, Raichu Lv. 24',
        badge: 'Thunder Badge'},

    {name: 'Erika', portrait: 'erika.png', location: 'Celadon City', pokemonteam: 'Victreebel, Tangela, Vileplume',
        pokemonlevels: 'RB: Victreebel Lv. 29, Tangela Lv. 24, Vileplume Lv. 29 | Y: Victreebel Lv. 32, Tangela Lv. 30, Vileplume Lv. 32 | FRLG: Victreebel Lv. 29, Tangela Lv. 24, Vileplume Lv. 29',
        badge: 'Rainbow Badge'},

    {name: 'Koga', portrait: 'koga.png', location: 'Fuchsia City', pokemonteam: 'Koffing, Muk, Koffing, Weezing',
        pokemonlevels: 'RB: Koffing Lv. 37, Muk Lv. 39, Koffing Lv. 37, Weezing Lv. 43 | Y: Koffing Lv. 37, Muk Lv. 39, Koffing Lv. 37, Weezing Lv. 43 | FRLG: Koffing Lv. 37, Koffing Lv. 37, Muk Lv. 39, Weezing Lv. 43',
        badge: 'Soul Badge'},

    {name: 'Sabrina', portrait: 'sabrina.png', location: 'Saffron City', pokemonteam: 'Mr. Mime, Kadabra, Venomoth, Alakazam',
        pokemonlevels: 'RB: Mr. Mime Lv. 37, Kadabra Lv. 38, Venomoth Lv. 37, Alakazam Lv. 43 | Y: Mr. Mime Lv. 50, Kadabra Lv. 50, Venonat Lv. 49, Alakazam Lv. 54 | FRLG: Mr. Mime Lv. 37, Kadabra Lv. 38, Venomoth Lv. 38, Alakazam Lv. 43',
        badge: 'Marsh Badge'},

    {name: 'Blaine', portrait: 'blaine.png', location: 'Cinnabar Island', pokemonteam: 'Growlithe, Ponyta, Rapidash, Arcanine',
        pokemonlevels: 'RB: Growlithe Lv. 42, Ponyta Lv. 40, Rapidash Lv. 42, Arcanine Lv. 47 | Y: Ninetales Lv. 48, Rapidash Lv. 50 | FRLG: Growlithe Lv. 42, Ponyta Lv. 40, Rapidash Lv. 42, Arcanine Lv. 47',
        badge: 'Volcano Badge'},

    {name: 'Giovanni', portrait: 'giovanni.png', location: 'Viridian City', pokemonteam: 'Rhyhorn, Dugtrio, Nidoqueen, Nidoking, Rhydon',
        pokemonlevels: 'RB: Rhyhorn Lv. 45, Dugtrio Lv. 42, Nidoqueen Lv. 44, Nidoking Lv. 45, Rhydon Lv. 50 | Y: Dugtrio Lv. 50, Persian Lv. 53, Nidoqueen Lv. 53, Nidoking Lv. 55 | FRLG: Rhyhorn Lv. 45, Dugtrio Lv. 42, Nidoqueen Lv. 44, Nidoking Lv. 45, Rhydon Lv. 50',
        badge: 'Earth Badge'}
  ]);
}
