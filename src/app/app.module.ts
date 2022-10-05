import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ListProductsComponent } from './menu/products/list-products/list-products.component';

import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

const UI= [
  TableModule
]

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children:[
      {path:"products",component:ListProductsComponent}
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,ListProductsComponent
  ],
  imports: [
    BrowserModule,AppLayoutModule,RouterModule.forRoot(routes),...UI,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
