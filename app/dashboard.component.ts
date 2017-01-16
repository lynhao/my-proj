/**
 * Created by linhao on 2017/1/15.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]

})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    //selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    //gotoDetail(): void {
    //    alert(this.selectedHero.id);
    //    this.router.navigate(['/detail', this.selectedHero.id]);
    //}
}
