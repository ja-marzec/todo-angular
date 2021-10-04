import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character = history.state
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.character)
    }
}
