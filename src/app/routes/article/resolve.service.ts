import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleResolve implements Resolve<any> {
  constructor(private api: RestApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.api.getArticle(route.params.shortId);
  }
}

@Injectable()
export class CommentsResolve implements Resolve<any> {
  constructor(private api: RestApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.api.getComments(route.params.shortId);
  }
}
