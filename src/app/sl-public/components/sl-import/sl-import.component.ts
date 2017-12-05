import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const slSource = 'EU';

@Component({
    selector: 'sl-import',
    templateUrl: './sl-import.component.html'
})

export class SlImportComponent {

    uploader: FileUploader = new FileUploader({ url: URL, itemAlias: slSource });

    hasError: boolean;

    constructor() { }

    checkFileExt(fileType: string): Boolean {
        if (fileType !== 'text/xml') {
            this.hasError = true;
            return true;
        }
        return false;
    }

    remove(file: FileItem): void {
        file.remove();
        this.hasError = false;
    }
}
