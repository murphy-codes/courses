import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http
    .post<{ name: string }>(
      'https://tcgta2-section-18-default-rtdb.firebaseio.com/posts.json',
      postData,
      { // observe: 'body' // default value → returns response data extracted and auto-converted to JS obj
        observe: 'response'
      }
    )
    .subscribe(
      responseData => { // we do not return this, and instead subscribe here, because the template doesn't NTK
        console.log(responseData); // responseData.body // if returning full response
      }, 
      error => {
        this.error.next('Send post failed: ' + error.error.error); // error.message // The custome 'error' prop is Firebase specific, message isn't
      }
    );
  }
  





  fetchPosts() { // note 261.b: that which is not should be moved to a service
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty'); // .append('custom', 'key');
    searchParams = searchParams.append('custom', 'key');
    return this.http
    .get<{ [key: string]: Post }>(
      'https://tcgta2-section-18-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: searchParams, // new HttpParams().set('print', 'pretty'),
        responseType: 'json'
      }
    )
    .pipe(
      map(responseData => { // (responseData): { [key: string]: Post } // implented ↑2 because get is a 'generic' method
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key});
          }
        }
        return postArray; // we return (the observable) so the component can subscribe
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    )
  }

  deletePosts() {
    return this.http
    .delete('https://tcgta2-section-18-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text' // 'json' // default // parse & convert to json // 'blob' ← also available 4 files
      }
    ).pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            // ...
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}