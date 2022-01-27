import { Component, OnInit } from '@angular/core';
import { Characters, HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  page: number = 1;
  limitReached: boolean = false;
  characters: Characters = {
    info: { pages: 2 },
    results: [],
  };

  modalOpen = false;
  characterInfo = false;

  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getCharacters(this.page).subscribe((data) => {
      console.log(data);
      this.characters = data;
    });
  }

  fetchPage() {
    this._http.getCharacters(this.page).subscribe((data) => {
      this.characters = data;
    });
  }

  validatePageLimit = this.page < this.characters.info?.pages;
  validatePageBack = this.page < this.characters.info?.pages;

  fetchNextPage(): void {
    if (this.validatePageLimit) {
      this.page += 1;
      this.fetchPage();
      return;
    }
    this.limitReached = true;
  }

  fetchPreviousPage(): void {
    if (this.validatePageBack) {
      this.page -= 1;
      this.fetchPage();
    }
  }

  showInfo(item: any) {
    this.modalOpen = true;
    this.characterInfo = item;
  }
}
