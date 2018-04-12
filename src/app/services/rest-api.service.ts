import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestApiService {
  apiRoot = 'http://localhost:4020';

  constructor(private httpClient: HttpClient) {}

  getArticle(articleId): Observable<any> {
    const url = `${ this.apiRoot }/api/article/${ articleId }`;

    return this.httpClient.get(url);
  }

  getComments(articleId): Observable<any> {
    const url = `${ this.apiRoot }/api/article/${ articleId }/comments`;

    return this.httpClient.get(url);
  }

  getAllArticles() {
    const url = `${ this.apiRoot }/api/articles/list`;

    return this.httpClient.get(url);
  }

  getArticles(categoryId) {
    const url = `${ this.apiRoot }/api/articles/${ categoryId }/list`;

    return this.httpClient.get(url);
  }

  getCategories() {
    const url = `${ this.apiRoot }/api/categories/list`;

    return this.httpClient.get(url);
  }

  sendComment(text, article, author) {
    const url = `${ this.apiRoot }/api/comments/add`;

    return this.httpClient.post(url, {
      text: text,
      article: article,
      author: author
    });
  }
}
