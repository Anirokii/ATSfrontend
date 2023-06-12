import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interview } from '../modals/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private apiServerUrl =environment.apiBaseUrl;
    

  constructor(private http:HttpClient) { }

  public getInterviews():Observable<Interview[]>{
    return this.http.get<Interview[]>(`${this.apiServerUrl}/interview/all`);
}

  public addInterview(interview:Interview):Observable<Interview>{
    return this.http.post<Interview>(`${this.apiServerUrl}/interview/add`,interview);
  }


  public updateInterview(interview:Interview):Observable<Interview>{
    return this.http.put<Interview>(`${this.apiServerUrl}/interview/update`,interview);
  }

  public deleteInterview(interviewId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/interview/delete/${interviewId}`);
  }
}
