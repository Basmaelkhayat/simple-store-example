import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  addNew(body: any): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', this.baseUrl, body, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getDataList(): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=10`);
  }

  getOneProudect(): Observable<any> {
    return this.http.get(
      `${this.baseUrl + '/' + window.location.href.split('/')[5]}`
    );
  }
}
