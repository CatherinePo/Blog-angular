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
  @Output() addCard = function() {
    cards.push({
      name: 'Title1',
      description: 'A great phone with one of the best cameras'
    })
  };
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
