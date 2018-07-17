import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { ReadComponent } from './read/read.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    IllustrationsComponent,
    ReadComponent,
    ChapterOneComponent,
    HeroComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
