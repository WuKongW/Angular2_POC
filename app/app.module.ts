import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { BlogModule } from './blog/blog.module';

import AppComponent from './common/components/app.component';
import { HomeComponent } from './common/components/index';
import { routing } from './common/router/app.routing';

@NgModule({
    imports: [
        BrowserModule,
        BlogModule,
        routing,
    ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent],
})

export class AppModule { }
