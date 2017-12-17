import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clipboard } from 'ts-clipboard';

const URL = 'http://localhost:8080/api/allowed/';

@Component({
  selector: 'sl-rest-service',
  templateUrl: './sl-rest-service.component.html'
})
export class SlRestServiceComponent {

  response: string;
  isAllowed: boolean;
  firstName: string = '';
  lastName: string = '';

  constructor(private http: Http) { }

  submit(firstName: string, lastName: string): void {
    if (firstName != '' && lastName != '') {
      this.http.get(URL + firstName + "/" + lastName).subscribe(result => {
        this.response = result.text();

        if (this.response.includes('false')) {
          this.isAllowed = false;
        } else {
          this.isAllowed = true;
        }
      });
    }
  }

  copyToClipboard(): void {
    Clipboard.copy(URL);
  }

  clear(): void {
    this.firstName = '';
    this.lastName = '';
  }
}
