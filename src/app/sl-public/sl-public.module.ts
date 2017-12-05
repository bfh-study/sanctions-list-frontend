import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlPublicRouting} from './sl-public-routing';
import { SlWelcomeComponent } from './components/sl-welcome/sl-welcome.component';
import { SlNavbarComponent } from './components/sl-navbar/sl-navbar.component';
import { SlImportComponent } from './components/sl-import/sl-import.component';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

@NgModule({
    imports: [
        CommonModule,
        SlPublicRouting,
        FileUploadModule
    ],
    declarations: [
        SlNavbarComponent,
        SlWelcomeComponent,
        SlImportComponent],
    exports: [
        SlNavbarComponent
    ]
})
export class SlPublicModule {}
