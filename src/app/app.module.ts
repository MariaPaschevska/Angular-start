import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductModule } from './products/product.module';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
