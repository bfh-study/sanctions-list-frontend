import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SlWelcomeComponent } from './components/sl-welcome/sl-welcome.component';
import { SlImportComponent } from './components/sl-import/sl-import.component';

const routes: Routes = [
    {
        path: 'welcome',
        component: SlWelcomeComponent
    }, {
        path: 'import',
        component: SlImportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SlPublicRouting {}
