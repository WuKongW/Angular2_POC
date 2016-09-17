import {Component} from '@angular/core';

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
`]
})
export default class AppComponent { }
