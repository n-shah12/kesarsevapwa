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
    status:any=1;
    ttype:any="f";
    constructor(private router: Router,private route: ActivatedRoute,
        public global:GlobalService,private orderservice:OrderService) { }

    ngOnInit(): void {
        this.user= this.global.getuser();
        this.getallorder();
     }
    
     filterdata(status,type){
        this.status=status;
        this.ttype=type;
        this.getallorder();
     }
    getallorder(){
        this.orderservice.getOrder({"flag":"bskuid","status":this.status,"ttype":this.ttype,"SKUserId":parseInt(this.user.UserId) }).subscribe((data) => {
            if( data.status==200){
                this.orderdetailsall=data.data;
            }
          }, (err) => {
            
          });
    }
    distribute(data){
        if(data.OrderStatus!=1){
            return;
        }
        this.router.navigate(["/distribute",
       {SKUserId:data.UserId,OrderId:data.OrderId}]);
       
    }


}
