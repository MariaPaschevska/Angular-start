import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductDetailComponent} from './product-detail.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {WelcomeComponent} from '../home/welcome.component';
import {ProductService} from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
