import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }
}
