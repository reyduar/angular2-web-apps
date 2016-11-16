// ====== ariel duarte ======
import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../model/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
    selector: 'bookmarks-list',
    templateUrl: 'app/views/bookmarks-list.html',
    providers: [ BookmarkService ]
})

export class BookmarksListComponent implements OnInit{
  public bookmark:Bookmark;
  public bookmarkSelected:Bookmark;
  public bookmarks:Bookmark[];

   constructor(private _bookmarksService: BookmarkService){}

  selectBookmark(bookmark){
    this.bookmark = bookmark;
    this.bookmarkSelected = bookmark;
  }

  getBookmarks(){
    this._bookmarksService.getBookmarks()
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
        },
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnInit(){
    this.getBookmarks();
    this.bookmarkSelected = this.bookmark;
  }
}
