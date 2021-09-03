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
  card;

  @Output() del = function() {
    if (confirm('Уверены, что хотите удалить запись?')) {
      alert("Запись удалена");
      
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
