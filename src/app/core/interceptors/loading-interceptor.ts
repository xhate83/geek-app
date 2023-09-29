import { Injectable, inject } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../../services/loading-service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    private _loadingService = inject(LoadingService);

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this._loadingService.setLoading(true);
      return next.handle(request).pipe(
        finalize(() => this._loadingService.setLoading(false))
      );
    }
}