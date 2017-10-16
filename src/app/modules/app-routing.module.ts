import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductGuardService } from '../services/product-guard.service';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
