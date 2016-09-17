import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { BlogModule } from './blog/blog.module';

import {NavbarComponent} from './common/components/navbar/navbar.component';
import HeaderComponent from './common/components/header/header.component';
import FooterComponent from './common/components/footer/footer.component';
import AppComponent from './common/components/app.component';
import { HomeComponent } from './common/components/index';
import { routing } from './common/router/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        BlogModule,
        routing,
    ],
    declarations: [AppComponent, HomeComponent, NavbarComponent,HeaderComponent, FooterComponent],
    bootstrap: [AppComponent],
})

export class AppModule { }
