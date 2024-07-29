import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly API_URL = `${environment.apiUrl || 'http://localhost:3000'}/product`;

  constructor(private httpClient: HttpClient) {}

  getAll = (): Observable<ProductModel[]> =>
    this.httpClient.get<ProductModel[]>(`${this.API_URL}`);

  getById = (id: string): Observable<ProductModel> =>
    this.httpClient.get<ProductModel>(`${this.API_URL}/${id}`);

  getPromos = (): Observable<ProductModel[]> =>
    this.httpClient.get<ProductModel[]>(`${this.API_URL}?promotion=true`);

  getAvoidPromos = (): Observable<ProductModel[]> =>
    this.httpClient.get<ProductModel[]>(`${this.API_URL}?promotion=false`);
}
