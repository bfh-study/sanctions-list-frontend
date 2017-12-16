import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'http://localhost:8080/api/file/upload/';

@Component({
    selector: 'sl-import',
    templateUrl: './sl-import.component.html'
})

export class SlImportComponent {

    uploader: FileUploader;
    hasError: boolean;
    sources: String[];

    constructor() {
        this.uploader = new FileUploader({
            method: 'POST',
            url: URL
        });

        this.uploader.onAfterAddingFile = (file: FileItem) => { 
            file.withCredentials = false;
        };

        this.uploader.onBuildItemForm = (file: FileItem, form: any) => {
            file.url = file.url + '?slSource=' + file.formData.source;
            return form;
        };

        this.sources = [
            'select Source',
            'EU', 
            'SECO'
        ];
    }

    checkFileExt(fileType: string): Boolean {
        if (fileType !== 'text/xml') {
            this.hasError = true;
            return true;
        }
        return false;
    }
    
    checkSource(item: FileItem): Boolean {
        if(item.formData.length == 0 || item.formData.source == this.sources[0].toString()) {
            this.hasError = true;
            return true;
        } else {
            return false;
        }
    }

    onSelectedSourceChanged(event, item: FileItem) {
        item.formData = {
            "source": event.target.value
        };
    }

    remove(file: FileItem): void {
        file.remove();
        this.hasError = false;
    }
}
