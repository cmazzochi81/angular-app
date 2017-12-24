import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {SearchComponent} from './search/search.component';
import { Painting } from './search/painting';
import { PaintingItemComponent } from './search/painting-item.component';
import { PaintingDetailsComponent } from './search/painting-details.component';
import { SearchPipe } from './search/search-pipe';
//adding the service you created as a provider
import {ArticleService} from './article.service';
import { ArticleComponent } from './article/article.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    CreateComponent,
    SearchComponent,
    PaintingItemComponent, 
    PaintingDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
