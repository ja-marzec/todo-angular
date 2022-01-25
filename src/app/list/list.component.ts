import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  page : number = 1;
  characters: any = {
    info: [],
    retults: [],
  };

  modalOpen = false;
  characterInfo = false;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getCharacters(this.page).subscribe((data) => {
      console.log(data)
      this.characters = data;
    });
  }

  showInfo(item: any) {
    this.modalOpen = true;
    this.characterInfo = item;
  }
}
