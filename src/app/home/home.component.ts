import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
// import { NavbarResponsivComponent } from './navbar-responsiv/navbar-responsiv.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
