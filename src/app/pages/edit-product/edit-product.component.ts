import { Component } from '@angular/core';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ProductFormComponent,ProductComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  product: Product = {
    description: "",
    price: 0,
    id: 0,
    image: "",
    name: "",
    stars: 0
  }


  changeName(value: string){
    this.product.name = value
  }

  changePrice(value: number){
    this.product.price = value
  }

  changeDescription(value: string){
    this.product.description = value
  }

  changeImage(value: string){
    this.product.image = value
  }

  submit(){
    // llamar a product service  POST o PUT
  }
}
