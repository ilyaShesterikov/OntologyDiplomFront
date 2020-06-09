import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecuteQueryService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  executeQuery(file: string, query: string): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${this.baseUrl}/execute-sparql-query`, {
      reportProgress: true,
      responseType: 'json',
      params: new HttpParams()
        .set('file', file)
        .set('query', query)
    });

    return this.http.request(req);
  }
}
