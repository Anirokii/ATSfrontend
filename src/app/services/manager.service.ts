import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../modals/actors/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private apiServerUrl =environment.apiBaseUrl;
    

  constructor(private http:HttpClient) { }

  public getManagers():Observable<Manager[]>{
    return this.http.get<Manager[]>(`${this.apiServerUrl}/manager/all`);
}

  public addManager(manager:Manager):Observable<Manager>{
    return this.http.post<Manager>(`${this.apiServerUrl}/Manager/add`,manager);
  }


  public updateManager(manager:Manager):Observable<Manager>{
    return this.http.put<Manager>(`${this.apiServerUrl}/Manager/update`,manager);
  }

  public deleteManager(managerId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/Manager/delete/${managerId}`);
  }
}
