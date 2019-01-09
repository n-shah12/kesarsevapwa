import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
import { OrderService } from 'src/app/services/order-service';
import { GlobalService } from '../../../common/global';

@Component({
    selector: 'app-ordnow',
    templateUrl: './ord.comp.html',
    styleUrls: ['./ord.comp.scss'],
    providers: [OrderService]
})
export class OrderNwDialogComponent implements OnInit {
    data: any = {};
    skuserdetail: any;
    user: any;
    mode: any = '';
    locations: any = [];
    constructor(@Inject(MAT_DIALOG_DATA) public data1: DialogData,
        private orderservice: OrderService, public global: GlobalService, 
        private msg:MatSnackBar) {

        this.mode = data1.mode;
        if (data1.mode === '') {
            this.skuserdetail = data1.selected;
        }
        this.locations = data1.locations
        // for (let index = 0; index < 100; index++) {
        //  this.locations.push({
        //      addr : index
        //  })

        // }
        this.user = this.global.getuser();
        this.data.Name = this.user.Name;
        this.data.MobileNo = this.user.MobileNo;
        this.data.EmailId = this.user.EmailID;
    }

    ngOnInit(): void {
        this.data.Quantity =1;

    }

    close() {

    }

    itemselected(item) {
        this.skuserdetail = item;
        this.mode = '';
    }

    Order() {



        var loc = "(" + this.skuserdetail.lat + "," + this.skuserdetail.lng + ")";
        this.data.Rate = 10.00;
        var insertupdate = {
            "OrderId": "0",
            "LocationMasterId": this.skuserdetail.LocationMasterId,
            "Name": this.data.Name,
            "UserId": this.user.UserId,
            "SKUserId": this.skuserdetail.UserId,
            "Quantity": this.data.Quantity,
            "Address": this.data.Address,
            "Contact": this.data.Contact,
            "EmailId": this.data.EmailId,
            "Rate": this.data.Rate,
            "DeliveryDate": new Date,
            "PaymentMode": 1,
            "OrderStatus": 1,
            "IsActive": true,
            "CreatedBy": this.user.UserId,
            "flag": "iu"
        }
        this.orderservice.newOrder(insertupdate).subscribe((data) => {
           if(data.data.length > 0){
            this.msg.open('Order successfully placed', 'Ok',{
                duration:4000
            })
           }else{
            this.msg.open('Error while placing order', 'Ok',{
                duration:4000
            })
           }
            //messgae order saved

        });
    }

}
