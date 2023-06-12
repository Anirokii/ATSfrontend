import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Candidate } from '../modals/candidate';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  
  private apiServerUrl =environment.apiBaseUrl;
  candidatesUpdadted = new BehaviorSubject<Candidate[]>([]);
    

    constructor(private http:HttpClient) { }

    public getCandidates():Observable<Candidate[]>{
      return this.http.get<Candidate[]>(`${this.apiServerUrl}/Candidate/all`);
    }

    public getCandidateById(candidateId:number):Observable<Candidate>{
      return this.http.get<Candidate>(`${this.apiServerUrl}/Candidate/find/${candidateId}`);
    }

    public addCandidate(candidate:Candidate):Observable<Candidate>{
      return this.http.post<Candidate>(`${this.apiServerUrl}/Candidate/add`,candidate);
    }


    public updateCandidate(candidate:Candidate):Observable<Candidate>{
      return this.http.put<Candidate>(`${this.apiServerUrl}/Candidate/update`,candidate);
    }

    public deleteCandidate(candidateId:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/Candidate/delete/${candidateId}`);
    }

    public uploadCandidateImage(candidateId: number, formData: FormData): Observable<void> {
      const url = `${this.apiServerUrl}/${candidateId}/profile-image`;
      return this.http.post<void>(url, formData).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Failed to upload candidate image:', error);
          return throwError('Error uploading candidate image');
        })
      );
    }
}
