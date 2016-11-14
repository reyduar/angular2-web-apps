// ====== ariel duarte ======
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { BookmarksListComponent } from './components/bookmarks-list.component';
import { FooterComponent } from './components/footer.component';
import { AddBookmarkComponent } from './components/add-bookmark.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, BookmarksListComponent, FooterComponent, AddBookmarkComponent],
  providers: [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
