import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order-service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-dl',
    templateUrl: './dl.comp.html',
    styleUrls: ['./dl.comp.scss'],
    providers:[OrderService]
})
export class DLComponent implements OnInit {
    leaderlist = ['A', 'B', 'C', 'D', 'D'];
    constructor(public global:GlobalService,private msg:MatSnackBar,private orderservice: OrderService, private router: Router) { }
    user:any;
    orderdata:any;
    donorlist:any;
    ngOnInit(): void {
        debugger;
        this.user = this.global.getuser();
        if (!(this.user && this.user.UserId)) {
            this.router.navigate(['/login']);
        }
        this.getorder();
     }
     
     getorder(){
        var d={"flag":"buid","UserId":this.user.UserId}
        this.orderservice.getOrder(d).subscribe((data) => {
            if( data.status==200){
                if(parseInt(data.data.length)>0 ){
                    this.orderdata=data.data;
                    this.donorlist=this.orderdata.filter(x=>x.IsDonte==true);
                   
                }
            }
         });
     }



}
