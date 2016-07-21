import {Component} from '@angular/core';

import HeaderComponent from './header/header.component';
import FooterComponent from './footer/footer.component';

@Component({
  selector: 'wk-app',
  template: `<wk-header></wk-header>
                <main>
                   <h1>Hello Angular2 !</h1>
                </main>
            <wk-footer></wk-footer>`,
  styles: [`
      main {
          height: 300px;
          text-align: center;
          }
`],
  directives: [HeaderComponent, FooterComponent]
})
export default class AppComponent { }
