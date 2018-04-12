import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('Home page loaded');

    this.articles = this.route.snapshot.data.articlesList.data;
    console.log(this.route.snapshot.data.articlesList);
  }
}
