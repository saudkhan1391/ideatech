import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdFormService {
  // webApiUrl = "http://localhost:5000";
  webApiUrl = "http://ekkoapp.tk:7600";

  constructor(private http: HttpClient) { }
  public postProduct(payload) {
    return this.http.post(`${this.webApiUrl}/products`, payload)
  }
  public postProductVariations(paylaod): Observable<any> {
    return this.http.post(`${this.webApiUrl}/variations`,paylaod)
  }
  public getAllProducts(): Observable<any> {
    return this.http.get(`${this.webApiUrl}/products`)
  }
  public getAllCategories(): Observable<any> {
    return this.http.get(`${this.webApiUrl}/categories`)
  }
  public getCategoryByObjectId(categoryId): Observable<any> {
    return this.http.get(`${this.webApiUrl}/categories/${categoryId}`)
  }
  public postNewCategory() {
    return this.http.get(`${this.webApiUrl}/categories`)
  }
}
