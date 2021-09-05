import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { cards } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards = cards;
  card;
  cardname = '';
  

  @Output() del = function(): void {
    if (confirm('Уверены, что хотите удалить запись?')) {
      const names = cards.map(el => el.name);
      const id = names.indexOf(this.card.name);
      cards.splice(id, 1);
      alert('Запись №' + (id + 1) + ' удалена');
      }
  };

  @Output() save = function(): void {
    if (this.card.newName === undefined){
      this.card.newName = this.card.name;
    } else {
      this.card.name = this.card.newName;
    }
    if (this.card.newDescription === undefined){
      this.card.newDescription = this.card.description;
    } else {
      this.card.description = this.card.newDescription;
    }
  };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.card = cards[+params.get('cardsId')];
    });
  }
}
