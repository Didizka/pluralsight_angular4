import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  _listFilter;
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMessage;

  constructor(private _productService: ProductService) {
  }


  showImage = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy): IProduct[] {
    return this.products.filter((product: IProduct) =>
    product.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  get listFilter(): string { return this._listFilter; }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      }, error => this.errorMessage = <any>error);

    this.filteredProducts = this.products;
    console.log('OnInit');
  }

  onRatingClicked(message): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
