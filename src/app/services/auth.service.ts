import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.http.post(environment.BASE_URL + 'auth/register/', data)
  }
}
