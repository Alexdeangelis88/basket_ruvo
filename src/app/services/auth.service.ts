import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userDTO } from '../model/user/userDTO';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { userLogin } from '../model/user/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  public registration(user : userDTO ) : Observable<any>{
    return this.http.post<any>(this.API_URL+'/api/Auth/registration',user);
  }

  public login(user : userDTO ) : Observable<userLogin>{
    return this.http.post<userLogin>(this.API_URL+'/api/Auth/login',user);
  }
}
