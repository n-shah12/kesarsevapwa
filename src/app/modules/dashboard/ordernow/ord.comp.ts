import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
import { OrderService } from 'src/app/services/order-service';
import { GlobalService } from '../../../common/global';
import { Router } from '@angular/router';

@Component({
    selector: 'app-ordnow',
    templateUrl: './ord.comp.html',
    styleUrls: ['./ord.comp.scss'],
    providers:[OrderService]
})
export class OrderNwDialogComponent implements OnInit {
    data:any = {};
    skuserdetail:any;
    user:any;
    constructor(@Inject(MAT_DIALOG_DATA) public data1: DialogData,
    private orderservice: OrderService,public global: GlobalService,private router: Router) {
        this.skuserdetail= data1;
     }

    ngOnInit(): void { 
        this.user= this.global.getuser();
        if( !(this.user && this.user.UserId)){
            this.router.navigate(['/home']);
        }

    }
    Order(){
    


    var loc="("+this.skuserdetail[0].lat+","+this.skuserdetail[0].lng+")";
    this.data.Rate=10.00;
    var insertupdate={
      "OrderId":"0",
      "LocationMasterId":this.skuserdetail[0].LocationMasterId,
      "Name":this.data.Name,
      "UserId":this.user.UserId,
      "SKUserId":this.skuserdetail[0].UserId,
      "Quantity":this.data.Quantity,
      "Address":this.data.Address,
      "Contact":this.data.Contact,
      "EmailId":this.data.EmailId,
      "Rate":this.data.Rate,
      "DeliveryDate":new Date,
      "PaymentMode":1,
      "OrderStatus":1,
      "IsActive":true,
      "CreatedBy":this.user.UserId,
      "flag":"iu"
    }
    this.orderservice.newOrder(insertupdate).subscribe((data) => {
       debugger;
      //messgae order saved
      
    });
    }

}
