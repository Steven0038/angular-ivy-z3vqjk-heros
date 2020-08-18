import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero' // interface
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // getHeroes():void {
  //   this.heroes = this.heroservice.getHeroes();
  // }

  // get Observable and wait and run asynchronize callback func.
  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}