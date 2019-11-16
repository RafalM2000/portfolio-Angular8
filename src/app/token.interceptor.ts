import { HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpHeaders } from '@angular/common/http';

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
          const newReqest = req.clone({
              headers: new HttpHeaders({
                  Authorization: 'myGitToken'
              })
          });
          console.log('Request has been already send');
          return next.handle(newReqest);
    }
}
