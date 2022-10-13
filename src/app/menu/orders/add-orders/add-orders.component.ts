import { Router } from '@angular/router';
import { OrdersService } from './../../../services/orders.service';
import { OrderLine } from './../../../shared/entities/OrderLine';
import { Product } from 'src/app/shared/entities/Product';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Order } from 'src/app/shared/entities/Order';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
})
export class AddOrdersComponent implements OnInit {

  cols: any[] = [];
  order_lines: OrderLine[]=[];
  qr_entred:string = ""
  prix_htx:number = 0

  constructor(private router: Router,private messageService:MessageService,private orderService:OrdersService) { }

  ngOnInit(): void {
      this.cols = [
        { field: "product.id", header: 'Id' },
        { field: 'product.qrCode', header: 'Code QR' },
        { field: 'product.label', header: 'Designation' },
        { field: 'product.price', header: 'Prix' },
        { field: 'quantity', header: 'Quantité' }
    ];
  }

  search(){
    this.orderService.getProductByQrCode(this.qr_entred).subscribe(product=>{
      console.log(product)
      if(product!=null){
        let oderline:OrderLine={
          quantity:1,
          product
        }
        this.prix_htx = this.prix_htx + product.price;
        this.order_lines.push(oderline);
      }else{
        this.messageService.add({severity:'error', summary:'', detail:'No product with this qr code'});
      }
    },err=>{
      this.messageService.add({severity:'error', summary:'', detail:'Something wrong!!'});
    })
    this.qr_entred=""
  }


  save(){
    let order:Order= {
        orderLines:this.order_lines
    }
    this.orderService.post(order).subscribe(result=>{
      this.messageService.add({severity:'success', summary:'', detail:'Order is saved..'});
      this.router.navigate(['/products'])
    },err=>{
      this.messageService.add({severity:'error', summary:'', detail:'Something wrong!!'});
    })
  }


}
