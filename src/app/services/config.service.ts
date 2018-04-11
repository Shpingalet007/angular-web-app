import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  configs = {};

  constructor(private http: HttpClient) {}

  getConfigMain() {
    return this.http.get('./assets/config.json');
  }

  getConfigRest() {
    return this.http.get('./assets/config-rest.json');
  }

}
