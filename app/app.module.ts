import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import AppComponent from './common/components/app.component';
import {HomeComponent, AboutComponent} from './common/components/index';
import { routing } from './common/router/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing,
    ],
    declarations: [AppComponent, AboutComponent, HomeComponent],
    bootstrap: [AppComponent],
})

export class AppModule { }
