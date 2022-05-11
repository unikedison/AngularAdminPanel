import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productDetails: any;
  constructor(private _http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    this._http.get("https://6265c28edbee37aff9a88b5a.mockapi.io/products").subscribe((data) => {
        this.productDetails = data;
      })
  }

}
