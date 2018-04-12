import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: any;
  comments: any;

  constructor(private route: ActivatedRoute) {}

  static onSubmit() {
    console.log('Form submit');
  }

  ngOnInit(): void {
    console.log('Article page loaded');

    this.article = this.route.snapshot.data.article.data;
    this.comments = this.route.snapshot.data.comments.data;
    console.log(this.article, this.comments);
  }
}
