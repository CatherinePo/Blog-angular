import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() alertMsg = function() {
    alert('Я тупая кнопка')
  };

  constructor() { }

  ngOnInit(): void {
    // alert('Hi!')
  }

  // ngOnClick(): void {
  //   alert('Hi!')
  // }

}
