import {Routes, RouterModule} from '@angular/router';

const APP_ROUTER: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTER, {enableTracing: true });
