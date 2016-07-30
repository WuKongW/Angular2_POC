import {Component} from '@angular/core';

import {NavbarComponent} from '../navbar/navbar.component';

@Component({
    moduleId: 'app/common/components/header/',
    selector: 'wk-header',
    templateUrl: `header.html`,
    styleUrls: ['header.css'],
    directives: [NavbarComponent]
})
export default class HeaderComponent { }
