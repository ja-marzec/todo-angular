import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

export interface Characters {
    info: any,
    results: any[]
  }

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor( private http: HttpClient) {
    }

    getCharacters(page: number) {
        return this.http.get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}`)
    }
}