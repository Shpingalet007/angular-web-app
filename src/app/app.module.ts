import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';


import { AppComponent } from './app.component';
import { ArticleComponent } from './routes/article/article.component';
import { HomeComponent } from './routes/home/home.component';
import { RestApiService } from "./services/rest-api.service";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [
    ConfigService,
    RestApiService
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
