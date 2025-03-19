import { RouterModule } from '@angular/router'; // Import RouterModule
import { Component, OnInit } from '@angular/core';
import { imageCategories, ImageData } from '../../../public/data/imageData';

@Component({
  selector: 'app-cardsHome',
  standalone: true,
  templateUrl: './cardsHome.component.html',
  styleUrls: ['./cardsHome.component.scss'],
  imports: [RouterModule] 
})
export class CardsHomeComponent implements OnInit {
  randomImageFirst: ImageData = { id :'', name: '', link: '#', photo: '', tags: [], description: '' };
  randomImageSecond: ImageData = { id :'', name: '', link: '#', photo: '', tags: [], description: '' };
  randomImageThird: ImageData = { id :'', name: '', link: '#', photo: '', tags: [], description: '' };

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.preloadImages();
    }

    const uniqueTags = this.getUniqueTags();
    const tagFirst = uniqueTags[Math.floor(Math.random() * uniqueTags.length)];
    this.randomImageFirst = this.getRandomImageByTag(tagFirst) || { id :'', name: '', link: '#', photo: '', tags: [], description: '' };

    const tagSecond = uniqueTags.filter(tag => tag !== tagFirst)[Math.floor(Math.random() * (uniqueTags.length - 1))];
    this.randomImageSecond = this.getRandomImageByTag(tagSecond, [this.randomImageFirst]) || { id :'', name: '', link: '#', photo: '', tags: [], description: '' };

    const tagThird = uniqueTags.filter(tag => tag !== tagFirst && tag !== tagSecond)[Math.floor(Math.random() * (uniqueTags.length - 2))];
    this.randomImageThird = this.getRandomImageByTag(tagThird, [this.randomImageFirst, this.randomImageSecond]) || { id :'', name: '', link: '#', photo: '', tags: [], description: '' };
  }

  getUniqueTags(): string[] {
    const allImages = Object.values(imageCategories).flat();
    const allTags = allImages.flatMap(img => img.tags);
    return Array.from(new Set(allTags));
  }

  getRandomImageByTag(tag: string, excludeImages: ImageData[] = []): ImageData | null {
    const allImages = Object.values(imageCategories).flat();
    const filteredImages = allImages.filter(img => img.tags.includes(tag) && !excludeImages.includes(img));
    return filteredImages.length ? filteredImages[Math.floor(Math.random() * filteredImages.length)] : null;
  }

  preloadImages(): void {
    const allImages = Object.values(imageCategories).flat().map(img => img.photo);
    allImages.forEach(imageSrc => {
      if (typeof window !== 'undefined') {
        const img = new Image();
        img.src = imageSrc;
      }
    });
  }
}