import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = "ABC.XYZ.123********************"

    let peticion = request.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    return next.handle(peticion);
    // 403, 401
  }
}
