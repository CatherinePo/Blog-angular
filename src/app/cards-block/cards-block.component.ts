import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-cards-block',
  templateUrl: './cards-block.component.html',
  styleUrls: ['./cards-block.component.css']
})
export class CardsBlockComponent implements OnInit {
  cards = cards;
  constructor() { }

  ngOnInit(): void {
  }

}
