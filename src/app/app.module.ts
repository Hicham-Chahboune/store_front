import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { ListProductsComponent } from './menu/products/list-products/list-products.component';

import { HttpClientModule } from '@angular/common/http';
import { ListOrdersComponent } from './menu/orders/list-orders/list-orders.component';
import { AddOrdersComponent } from './menu/orders/add-orders/add-orders.component';

import { TableModule } from 'primeng/table';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

const UI= [
  TableModule,CardModule,InputTextModule,ButtonModule,ToastModule
]

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children:[
      {path:"products",component:ListProductsComponent},
      {path:"orders/save",component:AddOrdersComponent}
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,ListProductsComponent, ListOrdersComponent, AddOrdersComponent
  ],
  imports: [
    BrowserModule,AppLayoutModule,RouterModule.forRoot(routes),...UI,HttpClientModule,FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
