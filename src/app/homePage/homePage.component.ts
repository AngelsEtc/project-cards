import { Component, OnInit } from '@angular/core';
import { CardsHomeComponent } from '../cardsHome/cardsHome.component';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
  imports: [CardsHomeComponent]
})
export class HomePageComponent implements OnInit {
imagePathCardsHome: string = '/image/imagecardshome.png';

  constructor() { }

  ngOnInit() {
  }

}
