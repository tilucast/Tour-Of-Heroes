import { Component, OnInit } from '@angular/core';
import Hero from '../hero'
//import {Heroes} from '../mock-heroes'
import {HeroService} from '../hero.service'
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  
  constructor(
    private heroService: HeroService, /* private messageService: MessageService */
    ) { }

  ngOnInit(): void { // kinda resembles useeffect on react.
    this.getHeroes()
  }

  /* onSelect(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  } */

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes=  heroes)
  }

  add(name: string){
    name = name.trim()
    if(!name) return
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  delete(hero: Hero){
    this.heroes = this.heroes.filter(h => h !== hero )
    this.heroService.deleteHero(hero).subscribe()
  }
}
