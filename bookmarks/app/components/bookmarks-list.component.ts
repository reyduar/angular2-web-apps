// ====== ariel duarte ======
import {Component} from '@angular/core';
import {Bookmark} from '../model/bookmark';
import {BookmarkService} from '../services/bookmark.service';

@Component({
    selector: 'bookmarks-list',
    templateUrl: 'app/views/bookmarks-list.html',
    providers: [ BookmarkService ]
})

export class BookmarksListComponent {
  public bookmark:Bookmark;
  public bookmarkSelected:Bookmark;
  public bookmarks:Array<Bookmark>;

   constructor(private _bookmarksService: BookmarkService){
    this.bookmarkSelected = new Bookmark("Curso de Angular 2 Crear web apps desde cero", "Victor Robles", "Udemy", "https://www.udemy.com/curso-de-angular-2-en-espanol-crea-webapps-desde-cero/", "Video", "");
    this.bookmarks = this._bookmarksService.getBookmarks();

    this.bookmark = this.bookmarks[0];
   }

  selectBookmark(bookmark){
    this.bookmark = bookmark;
    this.bookmarkSelected = bookmark;
  }
}
