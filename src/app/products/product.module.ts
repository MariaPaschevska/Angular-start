import { NgModule } from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {WelcomeComponent} from '../home/welcome.component';
import {ProductService} from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
