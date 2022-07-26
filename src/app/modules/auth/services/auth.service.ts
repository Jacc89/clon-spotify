import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private readonly URL = environment.api

  constructor(private http: HttpClient, 
    public _cookie: CookieService
    ) { }


  sendCredentials(email:string, password: string):Observable<any>{
    console.log('ok ok', email, password)
    const body ={
      email,
      password
    }
    return this.http.post(`${this.URL}/`,body)
    .pipe(
      tap((responseOk: any)=>{
        const { tokenSession, data } = responseOk
        this._cookie.set('token services', tokenSession, 4, '/')
      })
    )
  }
}
