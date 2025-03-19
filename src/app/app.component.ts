import { Component } from '@angular/core';
import { HomePageComponent } from './homePage/homePage.component';
import {MatTreeModule} from '@angular/material/tree';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MatTreeModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-cards';
}
