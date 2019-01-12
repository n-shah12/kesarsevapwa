import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { OrderService } from '../../services/order-service';

@Component({
    selector: 'app-dl',
    templateUrl: './distributeorderlist.comp.html',
    styleUrls: ['./distributeorderlist.comp.scss'],
    providers:[OrderService]
})
export class DistributeOrderComponent implements OnInit {
    leaderlist = ['A', 'B', 'C', 'D', 'D'];
    orderdetailsall:any;
    orderfilterdata:any;
    user:any;
    constructor(public global:GlobalService,private orderservice:OrderService) { }

    ngOnInit(): void {
        this.user= this.global.getuser();
        this.getallorder();
     }
    
     filterdata(status){
        this.orderfilterdata=this.orderdetailsall.filter(x=>x.OrderStatus==status);
        console.log(this.orderfilterdata);  
     }
    getallorder(){
        this.orderservice.getOrder({"flag":"buid","SKUserId":parseInt(this.user.UserId) }).subscribe((data) => {
            if( data.status==200){
                this.orderdetailsall=data.data;
                this.filterdata("1");
            }
          

           debugger;
          }, (err) => {
            
          });
    }
    getallorderstatus(){

    }


}
