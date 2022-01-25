import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor( private http: HttpClient) {

    }

    getCharacters(page: number) {
        return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    }
}