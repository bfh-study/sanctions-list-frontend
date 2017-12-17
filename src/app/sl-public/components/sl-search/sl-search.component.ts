import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

const URL = 'http://localhost:8080/api/search/';

@Component({
  selector: 'sl-search',
  templateUrl: './sl-search.component.html'
})

export class SlSearchComponent {

  public response: String;

  constructor(private http: Http) { }

  search(keyWord: string): void{
    this.http.get(URL + keyWord).subscribe(result => {
      this.response = result.text();
    });
  }
}
