import { Component, OnInit } from '@angular/core';
import { NavbarItem } from './navbar-item';

@Component({
    selector: 'sl-navbar',
    template: `
        <ul class="navbar-nav">
            <li *ngFor="let item of navbarItems;" class="nav-item" routerLinkActive="active">
                <a class="nav-link" [routerLink]="item.path">{{item.name}}</a>
            </li>
        </ul>
        `
})
export class SlNavbarComponent {
    public navbarItems: NavbarItem[];

    constructor() {
        this.navbarItems = [
            new NavbarItem('Home', 'welcome'),
            new NavbarItem('Import', 'import'),
            new NavbarItem('Search', 'search')
        ];
    }
}
