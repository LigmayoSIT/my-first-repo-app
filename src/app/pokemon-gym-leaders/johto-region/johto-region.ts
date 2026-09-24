import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-johto-region',
  styleUrl: './johto-region.css',
  templateUrl: './johto-region.html',
})
export class JohtoRegion {
  gymleaders = signal([
    {name: 'Falkner', portrait: 'falkner.png', location: 'Violet City', pokemonteam: 'Pidgey, Pidgeotto',
        pokemonlevels: 'GS: Pidgey Lv. 9, Pidgeotto Lv. 13 | C: Pidgey Lv. 7, Pidgeotto Lv. 9',
        badge: 'Zephyr Badge'},

    {name: 'Bugsy', portrait: 'bugsy.png', location: 'Azalea Town', pokemonteam: 'Metapod, Kakuna, Scyther',
        pokemonlevels: 'GS: Metapod Lv. 14, Kakuna Lv. 14, Scyther Lv. 16 | C: Metapod Lv. 15, Kakuna Lv. 15, Scyther Lv. 17',
        badge: 'Hive Badge'},

    {name: 'Whitney', portrait: 'whitney.png', location: 'Goldenrod City', pokemonteam: 'Clefairy, Miltank',
        pokemonlevels: 'GS: Clefairy Lv. 18, Miltank Lv. 20 | C: Clefairy Lv. 18, Miltank Lv. 20',
        badge: 'Plain Badge'},

    {name: 'Morty', portrait: 'morty.png', location: 'Ecruteak City', pokemonteam: 'Gastly, Haunter, Gastly, Gengar, Haunter',
        pokemonlevels: 'GS: Gastly Lv. 21, Haunter Lv. 21, Gastly Lv. 23, Gengar Lv. 25, Haunter Lv. 23 | C: same as GS',
        badge: 'Fog Badge'},

    {name: 'Chuck', portrait: 'chuck.png', location: 'Cianwood City', pokemonteam: 'Primeape, Poliwrath',
        pokemonlevels: 'GS: Primeape Lv. 27, Poliwrath Lv. 30 | C: Primeape Lv. 27, Poliwrath Lv. 30',
        badge: 'Storm Badge'},

    {name: 'Jasmine', portrait: 'jasmine.png', location: 'Olivine City', pokemonteam: 'Magnemite, Magnemite, Steelix',
        pokemonlevels: 'GS: Magnemite Lv. 30, Magnemite Lv. 30, Steelix Lv. 35 | C: same as GS',
        badge: 'Mineral Badge'},

    {name: 'Pryce', portrait: 'pryce.png', location: 'Mahogany Town', pokemonteam: 'Seel, Dewgong, Piloswine',
        pokemonlevels: 'GS: Seel Lv. 27, Dewgong Lv. 29, Piloswine Lv. 31 | C: Seel Lv. 30, Dewgong Lv. 32, Piloswine Lv. 34',
        badge: 'Glacier Badge'},

    {name: 'Clair', portrait: 'clair.png', location: 'Blackthorn City', pokemonteam: 'Dragonair, Dragonair, Dragonair, Kingdra',
        pokemonlevels: 'GS: Dragonair Lv. 37, Dragonair Lv. 37, Dragonair Lv. 37, Kingdra Lv. 40 | C: same as GS',
        badge: 'Rising Badge'}
  ]);
}
