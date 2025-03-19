import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imageCategories, ImageData } from '../../../public/data/imageData'; // Import image data
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss'],
  imports: [CommonModule]
})
export class CardPageComponent implements OnInit {
  selectedImage: ImageData = { id: '', name: '', link: '#', photo: '', tags: [], description: '' };
  allImages: ImageData[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.allImages = Object.values(imageCategories).flat();

    const imageId = this.route.snapshot.paramMap.get('id');

    this.selectedImage = this.allImages.find(image => image.id === imageId) || this.selectedImage;

    console.log('Selected Image:', this.selectedImage);

    if (!this.selectedImage || this.selectedImage.id === '') {
      console.error('Image not found');
    }
  }
}
