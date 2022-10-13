import { Product } from 'src/app/shared/entities/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../shared/entities/Order';
import { ORDERS_URL, PRODUCTS_URL } from '../shared/PATH';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }


  post(order:Order):Observable<Order>{
    return this.http.post<Order>(ORDERS_URL+"/save",order);
  }
  getProductByQrCode(qr:string):Observable<Product>{
    return this.http.get<Product>(PRODUCTS_URL+"/qr/"+qr);
  }

}
