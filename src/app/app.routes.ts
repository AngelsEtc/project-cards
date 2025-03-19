import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { NgModule } from '@angular/core';
import { CardPageComponent } from './cardPage/cardPage.component';
import { CardsPageComponent } from './cardsPage/cardsPage.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'cards', component: CardsPageComponent },
    //{ path: 'about', component: AboutPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'cardpage/:id', component: CardPageComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  