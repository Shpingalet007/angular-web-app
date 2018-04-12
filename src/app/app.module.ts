import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { CategoryComponent } from './routes/category/category.component';
import { ArticleComponent } from './routes/article/article.component';

import { RestApiService } from './services/rest-api.service';
import { HomeResolve } from './routes/home/resolve.service';
import { CategoryResolve } from './routes/category/resolve.service';
import { ArticleResolve, CommentsResolve } from './routes/article/resolve.service';
import { CommentComponent } from './forms/comment/comment.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    resolve: {
      articlesList: HomeResolve
    }
  },
  {
    path: 'category/:id', component: CategoryComponent,
    resolve: {
      articlesList: CategoryResolve
    }
  },
  {
    path: 'article/:shortId', component: ArticleComponent,
    resolve: {
      article: ArticleResolve,
      comments: CommentsResolve
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    CategoryComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    [{provide: APP_BASE_HREF, useValue: '/'}],
    ConfigService,
    RestApiService,
    HomeResolve,
    ArticleResolve,
    CategoryResolve,
    CommentsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private titleService: Title,
    private configService: ConfigService
  ) {
    // Loading configurations
    this.configService.getConfigMain().subscribe(data => {
      console.log(data);
    });
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
