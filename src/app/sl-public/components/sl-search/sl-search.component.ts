import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { SlSearchSanctionEntityModel } from './sl-search-sanction-entity.model';
import { forEach } from '@angular/router/src/utils/collection';

const URL = 'http://localhost:8080/api/search?query=';

@Component({
  selector: 'sl-search',
  templateUrl: './sl-search.component.html'
})

export class SlSearchComponent {

  searchResults: SlSearchSanctionEntityModel[];

  isResponseOk: boolean;

  constructor(private http: Http) { }

  search(keyWords: string): void {
    this.searchResults = new Array<SlSearchSanctionEntityModel>();
    this.isResponseOk = false;
    this.http.get(URL + keyWords).subscribe(result => {
      let jsonResponse: any[] = result.json();
      jsonResponse.forEach((val) => {
        this.searchResults.push(new SlSearchSanctionEntityModel(val));
      });
      this.isResponseOk = true;
      console.log(this.searchResults);
    });
  }
}
