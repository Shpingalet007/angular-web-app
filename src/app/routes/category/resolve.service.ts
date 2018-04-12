import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryResolve implements Resolve<any> {
  constructor(private api: RestApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.api.getArticles(route.params.id);
  }
}
