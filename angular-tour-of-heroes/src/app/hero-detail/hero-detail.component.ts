//se convierte en una clase de tipo input por eso la importación espeial en @angular/core y la decoracion @Input en (1)

import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  //(1)con la decoración @Input
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  //in this part I extract the route parameter to get a hero
  ngOnInit(): void{
    this.getHero();
  }
  getHero(): void {
    //+converts to int the string provides by the route
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => this.hero= hero);
  }

  //go back
  goBack(): void {
    this.location.back();
  }

}
