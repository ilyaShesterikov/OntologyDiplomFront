import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpHeaders, HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDBService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createDB(file: string): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${this.baseUrl}/create-db`, {
      reportProgress: true,
      responseType: 'json',
      params: new HttpParams()
        .set('file', file)
    });

    return this.http.request(req);
  }

  insertIndividuals(file: string): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `${this.baseUrl}/insert-individuals`, {
      reportProgress: true,
      responseType: 'json',
      params: new HttpParams()
        .set('file', file)
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
