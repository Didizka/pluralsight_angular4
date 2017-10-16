import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Details';
  product: IProduct;
  errorMessage;

  constructor(private _router: ActivatedRoute, private _location: Location, private _productService: ProductService) { }

  ngOnInit() {
    const id = +this._router.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._productService.getProductById(id).subscribe(
        product => this.product = product,
        error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this._location.back();
  }

}
