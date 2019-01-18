import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Thor', class: 'thor' },
      { id: 12, name: 'Loki', class: 'loki' },
      { id: 13, name: 'Hulk', class: 'hulk' },
      { id: 14, name: 'Black Widow', class: 'blackwidow' },
      { id: 15, name: 'Black Panther', class: 'blackpanther' },
      { id: 16, name: 'Captain America', class: 'captainamerica' },
      { id: 17, name: 'Iron Man', class: 'ironman' },
      { id: 18, name: 'Spider Man', class: 'spiderman' },
      { id: 19, name: 'Dare Devil', class: 'daredevil' },
      { id: 20, name: 'The Punisher', class: 'punisher' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
