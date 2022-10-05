import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/shared/entities/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
})
export class ListProductsComponent implements OnInit {


  products:Product[] = []

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result=>{
      this.products = result;
    })
  }

}
