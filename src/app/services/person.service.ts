import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Person } from '../modals/actors/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiServerUrl =environment.apiBaseUrl;
    

  constructor(private http:HttpClient) { }

  signup(person:Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiServerUrl}/signup`,person);
  }

  linkedinSignup(): void {
    window.location.href = 'http://localhost:8081/user/oauth2/authorization/linkedin';
  }
}
