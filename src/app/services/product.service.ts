import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8080/api/product/'

  constructor(
    private http: HttpClient
  ) { }


  GetAllList(page: number, pageSize: number): Observable<Product> {
    const url = `${this.url}?page=${page}&size=${pageSize}&'id,asc'`;
    return this.http.get<Product>(url);
  }
}
