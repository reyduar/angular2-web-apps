import { Injectable } from '@angular/core';
import { BOOKMARKS } from './mock.bookmarks';
import { Bookmark } from "../model/bookmark";

@Injectable()
export class BookmarkService {
  getBookmarks(){
    return BOOKMARKS;
  }

  addBookmark(book: Bookmark){
		Promise.resolve(BOOKMARKS).then((bms: Bookmark[]) => bms.push(book));
  }
}
