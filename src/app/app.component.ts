import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  apiRoot = 'http://localhost:4020';

  constructor(private httpClient: HttpClient) {}

  getArticles() {
    const url = `${ this.apiRoot }/api/articles/cv4lg3/list`;

    return this.httpClient.get(url)
      .subscribe(
        data => {
          console.log(data);
        }
      );
  }
}
