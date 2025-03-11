import { Component } from '@angular/core';
import { HomePageComponent } from './homePage/homePage.component';
import { CardsHomeComponent } from './cardsHome/cardsHome.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-cards';
  imagePathCardsHome: string = '/image/imagecardshome.png';
  imagePathCardChick404: string = '/image/chick404.jpg';
  imagePathCardKarobamio: string = '/image/karobamio.jpg';
  imagePathCardOkamivt: string = '/image/okamivt.jpg';
}
