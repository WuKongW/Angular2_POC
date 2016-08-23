import {Component} from '@angular/core';

import HeaderComponent from './header/header.component';
import FooterComponent from './footer/footer.component';

@Component({
  selector: 'wk-app',
  template: `<wk-header></wk-header>
                <main>
                   <router-outlet></router-outlet>
                </main>
            <wk-footer></wk-footer>`,
  styles: [`
      main {
          height: 400px;
          text-align: center;
          }
`],
  directives: [HeaderComponent, FooterComponent]
})
export default class AppComponent { }
