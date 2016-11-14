import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Bookmark } from '../model/bookmark';
import { BookmarkService } from '../services/bookmark.service';

@Component({
    templateUrl: 'app/views/add-bookmark.html',
    providers: [BookmarkService]
})

export class AddBookmarkComponent implements OnInit{
  public newBookmark: Bookmark;
  public nameParam = "";
  public descriptionParam = "";
  public authorParam = "";
  public urlParam = "";
  public typeParam = "";
  public codeParam = "";

  constructor(private _bookmarkService: BookmarkService,
              private _router: Router,
              private _actroute: ActivatedRoute){

  }

  onSubmit(){
		this._bookmarkService.addBookmark(this.newBookmark);
		this._router.navigate(["/add"]);
  }

ngOnInit(){
    this._actroute.params.forEach((params: Params) => {
			this.nameParam = params['name'];
      this.descriptionParam = params['author'];
      this.authorParam = params['description'];
      this.urlParam = params['url'];
      this.typeParam = params['type'];
      this.codeParam = params['code'];

      this.newBookmark = new Bookmark(this.nameParam, this.authorParam, this.descriptionParam,  this.urlParam, this.typeParam, this.codeParam);
		});
  }
}
