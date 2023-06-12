import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SearchResult } from '../modals/searchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  private apiServerUrl =environment.apiBaseUrl;
    

  constructor(private http:HttpClient) { }

  public getSearchResults():Observable<SearchResult[]>{
    return this.http.get<SearchResult[]>(`${this.apiServerUrl}/searchResult/all`);
  }
  public getSearchResultByJobId(id:number):Observable<SearchResult>{
    return this.http.get<SearchResult>(`${this.apiServerUrl}/searchResult/find/${id}`);
  }

  public addSearchResult(SearchResult:SearchResult):Observable<SearchResult>{
    return this.http.post<SearchResult>(`${this.apiServerUrl}/searchResult/add`,SearchResult);
  }


  public updateSearchResult(SearchResult:SearchResult):Observable<SearchResult>{
    return this.http.put<SearchResult>(`${this.apiServerUrl}/searchResult/update`,SearchResult);
  }

  public deleteSearchResult(SearchResult:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/searchResult/delete/${SearchResult}`);
  }

  public deleteCandidatefromSearchResult(jobId:number,candidateId:number):Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/searchResult/${jobId}/candidates/delete/${candidateId}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  
}
