import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Hero} from './hero.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log({
      ...this.model
    })
  }


  newHero() {
    this.model = new Hero(42, '', '');
  }
}
