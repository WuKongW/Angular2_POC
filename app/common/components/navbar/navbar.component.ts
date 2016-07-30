import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    moduleId: 'app/common/components/navbar/',
    selector: 'wk-navbar',
    templateUrl: 'navbar.html',
    styleUrls: ['navbar.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}