import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  @Input() product!: Product

  @Output() onChangeNameEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() onChangePriceEvent: EventEmitter<number> = new EventEmitter<number>()
  @Output() onChangeDescriptionEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() onChangeImageEvent: EventEmitter<string> = new EventEmitter<string>()
  @Output() onSubmitEvent: EventEmitter<void> = new EventEmitter<void>()


  form: FormGroup = this.fb.group({
    "name": new FormControl(null, [Validators.required]),
    "price": new FormControl(null, [Validators.required]),
    "description": new FormControl(null, [Validators.required]),
    "image": new FormControl(null, [Validators.required]),
  })

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      "name": new FormControl(this.product.name, [Validators.required]),
      "price": new FormControl(this.product.price, [Validators.required]),
      "description": new FormControl(this.product.description, [Validators.required]),
      "image": new FormControl(this.product.image, [Validators.required]),
    })
  }

  onChangeName(event: Event){
    const input = event.target as HTMLInputElement
    const value = input.value
    this.onChangeNameEvent.emit(value)
  }

  onChangePrice(event: Event){
    const input = event.target as HTMLInputElement
    const value: string = input.value
    this.onChangePriceEvent.emit(Number(value))
  }

  onChangeDescription(event: Event){
    const input = event.target as HTMLInputElement
    const value = input.value
    this.onChangeDescriptionEvent.emit(value)
  }

  onChangeImage(event: Event){
    const input = event.target as HTMLInputElement
    const value = input.value
    this.onChangeImageEvent.emit(value)
  }

  onSubmit(){
    this.onSubmitEvent.emit()
  }
}
