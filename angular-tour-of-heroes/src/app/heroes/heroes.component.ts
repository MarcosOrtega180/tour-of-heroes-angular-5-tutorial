import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
//(1)este código ya no unciona ya que ahora se depende directamente del
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES; //directamente de mock-heroes.ts
  heroes: Hero[]; // esto viene del servicio
  // selectedHero: Hero; (1)
  //Original getHeroes, without RxJS
  // getHeroes(): void {
  //   this.heroes= this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  //(1) onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  // }
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

}
