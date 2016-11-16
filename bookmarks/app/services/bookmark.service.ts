// ====== ariel duarte ======
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Import Model
import { Bookmark } from "../model/bookmark";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BookmarkService {
  // Resolve HTTP using the constructor
  constructor (private _http: Http) {}

    // private instance variable to hold base url
   //private serverUrl = 'https://heroku-api-rest.herokuapp.com/bookmarks';
   private serverUrl = 'http://localhost:8080/bookmarks';

   // Fetch all existing Bookmarks
   getBookmarks(){
         // ...using get request
         return this._http.get(this.serverUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     addBookmark(){

     }
}
