import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

import { cards } from '../cards';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  cards = cards;
  card = [{
    name: 'Title1',
    description: 'A great phone with one of the best cameras'
  }];
  cardname = '';
  carddescription = '';
  @Output() addCard = function(): void {
    cards.push({
      name: this.cardname,
      description: this.carddescription
    });
  };
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
