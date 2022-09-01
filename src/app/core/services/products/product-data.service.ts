import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ITshirt } from '../../../models/tshits.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    //localhost:3000
    http: return this.http.get<ITshirt[]>(`${environment.url_api}products`);
  }

  getProduct(id: string) {
    return this.http.get<ITshirt>(`${environment.url_api}products/${id}`);
  }

  createProduct(product: ITshirt) {
    return this.http.post(`${environment.url_api}products`, product);
  }

  updateProduct(id: string, changes: Partial<ITshirt>) {
    return this.http.put(`${environment.url_api}products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}products/${id}`);
  }
}
