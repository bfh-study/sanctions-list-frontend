import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SlWelcomeComponent } from './components/sl-welcome/sl-welcome.component';
import { SlImportComponent } from './components/sl-import/sl-import.component';
import { SlSearchComponent } from './components/sl-search/sl-search.component';

const routes: Routes = [
    {
        path: 'welcome',
        component: SlWelcomeComponent
    }, {
        path: 'import',
        component: SlImportComponent
    }, {
        path: 'search',
        component: SlSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SlPublicRouting {}
