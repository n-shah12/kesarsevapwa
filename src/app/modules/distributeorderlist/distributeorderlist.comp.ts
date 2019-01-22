import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { OrderService } from '../../services/order-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dl',
    templateUrl: './distributeorderlist.comp.html',
    styleUrls: ['./distributeorderlist.comp.scss'],
    providers:[OrderService]
})
export class DistributeOrderListComponent implements OnInit {
    leaderlist = ['A', 'B', 'C', 'D', 'D'];
    orderdetailsall:any;
    orderfilterdata:any;
    user:any;
    constructor(private router: Router,private route: ActivatedRoute,
        public global:GlobalService,private orderservice:OrderService) { }

    ngOnInit(): void {
        this.user= this.global.getuser();
        this.getallorder();
     }
    
     filterdata(status){
        this.orderfilterdata=this.orderdetailsall.filter(x=>x.OrderStatus==status);
        console.log(this.orderfilterdata);  
     }
    getallorder(){
        this.orderservice.getOrder({"flag":"buid","UserId":parseInt(this.user.UserId) }).subscribe((data) => {
            if( data.status==200){
                debugger;
                this.orderdetailsall=data.data;
                this.filterdata("1");
            }
          }, (err) => {
            
          });
    }
    distribute(data){
        this.router.navigate(["/distribute",
       {SKUserId:data.UserId,OrderId:data.OrderId}]);
       
    }


}
