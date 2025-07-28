import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarResponsivComponent } from '../home/navbar-responsiv/navbar-responsiv.component';
import { HomeComponent } from '../home/home.component';

import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';

import { PortfolioComponent } from '../portfolio/portfolio.component';
import { WhatMyColleaguesSayComponent } from '../what-my-colleagues-say/what-my-colleagues-say.component';

import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, HomeComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, WhatMyColleaguesSayComponent, ContactComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
