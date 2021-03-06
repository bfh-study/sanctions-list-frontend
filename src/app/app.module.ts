import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';

import { SlPublicModule} from './sl-public/sl-public.module';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    SlPublicModule,
    FileUploadModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
