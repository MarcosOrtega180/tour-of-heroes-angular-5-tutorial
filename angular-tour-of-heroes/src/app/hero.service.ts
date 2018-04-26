import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {
  //aquí trabajamos sin observable
  // getHeroes(): Hero[] { //getHeroes es una clase que instancia a la clase Hero[]
  //   return HEROES;
  // }

  //aquí implementamos un observable con RxJS
  getHeroes(): Observable<Hero[]> { //getHeroes es una clase que instancia a la clase Hero[]
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`heroService: fetched hero id=${id}`);
    return of(HEROES.find(hero=>hero.id===id));
  }
  constructor(private messageService: MessageService) { }

}
