import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'http://localhost:8080/api/search/';

@Component({
  selector: 'sl-search',
  templateUrl: './sl-search.component.html'
})

export class SlSearchComponent {

  public response: string;

  constructor(private http: Http) { }

  search(keyWord: string): void{
    this.http.get(URL + keyWord).subscribe(result => {
      this.response = result.text();
    });
  }
}
