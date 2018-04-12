import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articleData: any;

  constructor(
    private api: RestApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Article page loaded');
    this.articleData = this.route.snapshot.data.article.data;
    console.log(this.articleData);
  }
}
