import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestApiService {
  apiRoot = 'http://localhost:4020';

  constructor(private httpClient: HttpClient) {}

  getArticle(articleId, cb) {
    const url = `${ this.apiRoot }/api/article/${ articleId }`;

    return this.httpClient.get(url).subscribe(cb);
  }

  /*getArticles(categoryId, cb) {
    const url = `${ this.apiRoot }/api/articles/${ categoryId }/list`;

    this.httpClient.get(url).subscribe(data => {
      cb(data);
    });
  }*/
}
