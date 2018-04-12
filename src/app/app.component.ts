import { Component } from '@angular/core';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  categories: any;

  constructor(private api: RestApiService) {
    this.getMenuLinks();
    api.sendComment('123','123','123');
  }

  getMenuLinks() {
    console.log('Requesting menu links...');

    return this.api.getCategories().toPromise()
      .then(res => this.categories = res.data);
  }
}
