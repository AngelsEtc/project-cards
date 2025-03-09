import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-cards';
  imagePathCardsHome: string = '/image/imagecardshome.png';
}
