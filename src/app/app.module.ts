import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { CardComponent } from './card/card.component';
import { CardsBlockComponent } from './cards-block/cards-block.component';
import { CreateCardComponent } from './create-card/create-card.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CardsBlockComponent },
      { path: 'cards/:cardsId', component: CardComponent },
      { path: 'create', component: CreateCardComponent },
      // { path: 'cart', component: CartComponent }
    ])
  ],
  declarations: [
    AppComponent,
    AddButtonComponent,
    CardComponent,
    CardsBlockComponent,
    CreateCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
