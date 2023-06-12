import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsableRH } from '../modals/actors/responsableRh';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRhService {

  private apiServerUrl =environment.apiBaseUrl;
    

  constructor(private http:HttpClient) { }

  public getResponsableRHs():Observable<ResponsableRH[]>{
    return this.http.get<ResponsableRH[]>(`${this.apiServerUrl}/responsabeRH/all`);
}

  public addResponsabeRH(responsableRH:ResponsableRH):Observable<ResponsableRH>{
    return this.http.post<ResponsableRH>(`${this.apiServerUrl}/responsabeRH/add`,responsableRH);
  }


  public updateResponsabeRH(responsableRH:ResponsableRH):Observable<ResponsableRH>{
    return this.http.put<ResponsableRH>(`${this.apiServerUrl}/responsabeRH/update`,responsableRH);
  }

  public deleteResponsabeRH(responsableRH:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/responsabeRH/delete/${responsableRH}`);
  }
}
