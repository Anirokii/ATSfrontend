import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Job } from '../modals/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiServerUrl =environment.apiBaseUrl;
  jobsUpdated = new BehaviorSubject<Job[]>([]);

    

  constructor(private http:HttpClient) { }

  public getJobs():Observable<Job[]>{
    return this.http.get<Job[]>(`${this.apiServerUrl}/job/all`);
  }

  public getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(`${this.apiServerUrl}/job/find/${id}`);
  }

  public addJob(job:Job):Observable<Job>{
    return this.http.post<Job>(`${this.apiServerUrl}/job/add`,job);
  }


  public updateJob(job:Job):Observable<Job>{
    return this.http.put<Job>(`${this.apiServerUrl}/Job/update`,job);
  }

  public deleteJob(jobId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Job/delete/${jobId}`);
  }
}
