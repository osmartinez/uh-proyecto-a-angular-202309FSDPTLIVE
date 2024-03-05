import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product

  
  
  public get starArray() : number[] {
    return [...Array(Math.floor(this.product.stars)).keys()]
  }
  
  public get starDecimal(): number{
    return this.product.stars - Math.floor(this.product.stars)
  }
  
}
