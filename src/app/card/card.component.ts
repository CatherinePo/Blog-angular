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
      alert('Изменения сохранены');
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
