import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productId = 1;
  productDetail: any;

  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpClient) {
    this.productId = this._activatedRoute.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.GetDataById();
  }

  GetDataById() {
    this._http.get(`https://6265c28edbee37aff9a88b5a.mockapi.io/products/${this.productId}`).subscribe((data) => {
      this.productDetail = data;
      console.log(data)
      })
  }

}
