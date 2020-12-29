import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) { // if (req.url) // we could use the url to prevent communication with a server
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    }) // params
    return next.handle(modifiedRequest) // next.handle(req);
  }
}

// req.url = 'a new url'; // ← req object is immutable, so this would fail .. we instead .clone() ...