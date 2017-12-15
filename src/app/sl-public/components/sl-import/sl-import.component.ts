import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';

//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
const URL = 'http://localhost:8080/api/file/upload/';

@Component({
    selector: 'sl-import',
    templateUrl: './sl-import.component.html'
})

export class SlImportComponent {

    uploader: FileUploader;
    hasError: boolean;

    constructor() {
        this.uploader = new FileUploader({
            method: 'POST',
            url: URL,
        });
    }

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
