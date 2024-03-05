import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getAll().subscribe({
        next: (res)=> this.products = res as Product[], 
        error: (err)=> console.log(err),
      })
  }
}
