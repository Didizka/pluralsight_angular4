import { NgModule } from '@angular/core';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ConvertToSpacesPipe } from '../pipes/convert-to-spaces.pipe';
import { ProductGuardService } from '../services/product-guard.service';
import { ProductService } from '../services/product.service';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ],
})
export class ProductModule { }
