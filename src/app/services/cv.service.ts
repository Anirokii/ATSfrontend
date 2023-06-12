import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cv } from '../modals/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiServerUrl =environment.apiBaseUrl;
    

    constructor(private http:HttpClient) { }

    public getCvs():Observable<Cv[]>{
      return this.http.get<Cv[]>(`${this.apiServerUrl}/cv/all`);
    }

    getCv(id: number) {
      return this.http.get(`${this.apiServerUrl}/cv/find/${id}`, {responseType: 'blob'});
    }

    public addCv(cv:Cv):Observable<Cv>{
      return this.http.post<Cv>(`${this.apiServerUrl}/cv/add`,cv);
    }


    public updateCv(cv:Cv):Observable<Cv>{
      return this.http.put<Cv>(`${this.apiServerUrl}/cv/update`,cv);
    }

    public deleteCv(cvId:number):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/cv/delete/${cvId}`);
    }
}
