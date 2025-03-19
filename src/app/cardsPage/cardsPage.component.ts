import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { imageCategories, ImageData} from '../../../public/data/imageData'; 
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cardsPage',
  standalone: true,
  templateUrl: './cardsPage.component.html',
  styleUrls: ['./cardsPage.component.scss'],
  imports: [CommonModule, RouterModule] 
})
export class CardsPageComponent implements OnInit {

  allImages: ImageData[] = [];
  isAscending: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAllImages();
  }

  loadAllImages(): void {
    this.allImages = Object.values(imageCategories).flat();
    this.sortImages();
  }

  sortImages(): void {
    const sortedImages = [...this.allImages].sort((a, b) =>
      this.isAscending
        ? a.name.localeCompare(b.name)  
        : b.name.localeCompare(a.name) 
    );

    this.allImages = sortedImages;
    

    this.updateInterface();
  }

  updateInterface(): void {
    this.cdr.detectChanges(); 
  }

  trackByImage(index: number, image: ImageData): number {
    return index; 
  }

  toggleSortOrder(): void {
    this.isAscending = !this.isAscending; 
    this.sortImages(); 
  }
}