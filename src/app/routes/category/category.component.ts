import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  articles: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('Category page loaded');

    this.articles = this.route.snapshot.data.articlesList.data;
  }

}
