import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';
import { SlPublicRouting} from './sl-public-routing';
import { SlWelcomeComponent } from './components/sl-welcome/sl-welcome.component';
import { SlNavbarComponent } from './components/sl-navbar/sl-navbar.component';
import { SlImportComponent } from './components/sl-import/sl-import.component';
import { SlSearchComponent } from './components/sl-search/sl-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SlPublicRouting,
        FileUploadModule,
        FormsModule
    ],
    declarations: [
        SlNavbarComponent,
        SlWelcomeComponent,
        SlImportComponent,
        SlSearchComponent],
    exports: [
        SlNavbarComponent
    ]
})
export class SlPublicModule {}
