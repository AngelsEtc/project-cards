import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsHome',
  templateUrl: './cardsHome.component.html',
  styleUrls: ['./cardsHome.component.scss']
})
export class CardsHomeComponent implements OnInit {
imagePathCardChick404: string = '/docs/browser/image/chick404.jpg';
imagePathCardKarobamio: string = '/image/karobamio.jpg';
imagePathCardOkamivt: string = '/image/okamivt.jpg';

  constructor() { }

  ngOnInit() {
  }

}
