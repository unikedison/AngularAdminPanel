import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  selectedProducts: any;
  categories: any;
  productDetails = [
    {
      name: "Ice Cream",
      category: "Food"
    },
    {
      name: "Face Wipe",
      category: "Hygine"
    },
    {
      name: "Pasta",
      category: "Food"
    },
    {
      name: "Cookies",
      category: "Food"
    },
    {
      name: "Hand Wash",
      category: "Hygine"
    },
    {
      name: "Sanitizer",
      category: "Hygine"
    }
  ]

  constructor() {
    this.productForm = new FormGroup({
      productName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      product: new FormControl("", [Validators.required])
    });

  }

  ngOnInit(): void {
  }

  PostData() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
    } else {
      alert("invalid form")
    }
  }

  ChangeProduct(e: any) {
    let products = this.productDetails.filter(x => x.category == e.target.value);
    this.selectedProducts = products;
  }

} 
