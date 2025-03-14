import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsHome',
  templateUrl: './cardsHome.component.html',
  styleUrls: ['./cardsHome.component.scss']
})
export class CardsHomeComponent implements OnInit {
  ngOnInit(): void {
    // Inicialização se necessário
    if (typeof window !== 'undefined') {
      this.preloadImages(); // Chama o método para carregar as imagens, apenas no cliente
    }
  }

  imageCategories: Record<string, string[]> = {
    purple: [
      'image/chick404.jpg',
      'image/hanakoawing.jpg',
      'image/racoona.jpg',
    ],
    pink: [
      'image/okamivt.jpg',
      'image/jessikirby.jpg',
      'image/faerisami.jpg',
    ],
    green: [
      'image/kurobamio.jpg',
      'image/jinkoshirou.jpg',
      'image/melkhill.jpg',
    ],
    blue: [
      'image/choconekomenta.jpg',
      'image/naota.jpg',
      'image/akayton.jpg',
    ],
    yellow: [
      'image/arderianlun.jpg',
      'image/omurice.jpg',
      'image/mijorin.jpg',
    ],
  };

  randomImageFirst: string;
  randomImageSecond: string;
  randomImageThird: string;

  // Método para pegar uma categoria aleatória
  getRandomCategory(excludeCategories: string[] = []): string {
    const categories = Object.keys(this.imageCategories).filter(category => !excludeCategories.includes(category));
    return categories[Math.floor(Math.random() * categories.length)];
  }

  // Método para pegar uma imagem aleatória de uma categoria
  getRandomImageFromCategory(category: string): string {
    const images = this.imageCategories[category];
    return images[Math.floor(Math.random() * images.length)];
  }

  // Método para pré-carregar todas as imagens
  preloadImages(): void {
    const allImages: string[] = [];
    // Recolher todas as imagens de todas as categorias
    for (const category in this.imageCategories) {
      if (this.imageCategories.hasOwnProperty(category)) {
        allImages.push(...this.imageCategories[category]);
      }
    }
    
    // Pré-carregar as imagens
    allImages.forEach(imageSrc => {
      if (typeof window !== 'undefined') {
        const img = new Image();
        img.src = imageSrc;
      }
    });
  }

  constructor() {
    // Escolher uma categoria aleatória para o primeiro cartão
    const categoryFirst = this.getRandomCategory();
    this.randomImageFirst = this.getRandomImageFromCategory(categoryFirst);

    // Escolher uma categoria aleatória para o segundo cartão, diferente do primeiro
    const categorySecond = this.getRandomCategory([categoryFirst]);
    this.randomImageSecond = this.getRandomImageFromCategory(categorySecond);

    // Escolher uma categoria aleatória para o terceiro cartão, diferente das duas anteriores
    const categoryThird = this.getRandomCategory([categoryFirst, categorySecond]);
    this.randomImageThird = this.getRandomImageFromCategory(categoryThird);
  }
}
