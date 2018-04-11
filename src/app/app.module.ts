import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ConfigService],
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
