import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  characters: any = {
    info: [],
    retults: [],
  };

  modalOpen = false;
  characterInfo = false;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getCharacters().subscribe((data) => {
      this.characters = data;
      console.log(this.characters);
    });
  }

  showInfo(item: any) {
    this.modalOpen = true;
    this.characterInfo = item;
  }
}
