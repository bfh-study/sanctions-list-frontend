import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Clipboard } from 'ts-clipboard';
import { SlRestResponseModel } from './sl-rest-response.model';
import { AppSettings } from '../../../app.settings';

const URL = AppSettings.API_HOST + AppSettings.API_URL + '/allowed/';

@Component({
  selector: 'sl-rest-service',
  templateUrl: './sl-rest-service.component.html'
})
export class SlRestServiceComponent {

  response: SlRestResponseModel;
  firstName: string = '';
  lastName: string = '';

  constructor(private http: Http) { }

  submit(firstName: string, lastName: string): void {
    if (firstName != '' && lastName != '') {
      this.http.get(URL + firstName + "/" + lastName).subscribe(result => {
        let jsonResponse: any = result.json();
        this.response = new SlRestResponseModel(jsonResponse.maxScore, jsonResponse.allowed);
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
