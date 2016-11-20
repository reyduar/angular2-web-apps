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
  public bookmarks:Bookmark[];
  public loading:string;

   constructor(private _bookmarksService: BookmarkService){}

  selectBookmark(bookmark){
    this.bookmark = bookmark;
  }

  getBookmarks(){
    //let bookmark_table = <HTMLElement>document.querySelector(".loading");
    //bookmark_table.style.visibility = "visilbe";
    this.loading = 'show';
    this._bookmarksService.getBookmarks()
    .subscribe(
        //Bind to view
        results => {
          this.bookmarks = results._embedded.bookmarks;
          this.loading = 'hide';
          //bookmark_table.style.display = "none";
        },
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnInit(){
    this.getBookmarks();
  }
}
