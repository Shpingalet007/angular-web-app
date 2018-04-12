import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articleData;

  constructor(
    private api: RestApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Article page loaded');
    this.route.params.subscribe(article => {
      console.log('Requesting content');

      this.api.getArticle(article.id, data => {
        this.articleData = data;
      });
    });
  }
}
