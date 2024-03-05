import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products"

  constructor(private http: HttpClient) { }

  // obtener todos
  getAll(){
    return this.http.get(this.url)
  }
  // obtener uno
  getById(id: number){
    return this.http.get(`${this.url}/${id}`)
  }

  // actualizar
  update(id:number, data: Product){
    return this.http.put(`${this.url}/${id}`,data)
  }

  // crear
  create(data: Product){
    return this.http.post(this.url,data)
  }
}
