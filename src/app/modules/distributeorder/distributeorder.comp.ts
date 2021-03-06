import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { OrderService } from '../../services/order-service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
    selector: 'app-dl',
    templateUrl: './distributeorder.comp.html',
    styleUrls: ['./distributeorder.comp.scss'],
    providers: [OrderService, UserService]
})
export class DistributeOrderComponent implements OnInit {
    leaderlist = ['A', 'B', 'C', 'D', 'D'];
    orderdetails: any;
    orderfilterdata: any;
    user: any;
    isordered: boolean = false
    IsDonte: number = 0;
    IsTransfer: any = 0;
    userdetail: any;
    inhand: any = 0;
    sold: any = 0;
    available: any = 0;
    donate: any = 0
    userMasterForm: any = {
        OrderId: "0",
        LocationMasterId: "",
        Name: "",
        UserId: "",
        SKUserId: "",
        Quantity: 1,
        Address: "",
        Rate: "",
        CreatedBy: "",
        Contact: "",
        PaymentMode: "",
        OrderStatus: "",
        OrderType: "",
        UserTypeID: "",
        isActive: true
    };

    selecteduser: any;


    constructor(private router: Router, private route: ActivatedRoute,
        public global: GlobalService, private orderservice: OrderService,
        private msg: MatSnackBar, private userservice_: UserService
    ) {
        if (this.route.snapshot.params['OrderId'] !== undefined) {
            this.isordered = true;
            this.userMasterForm.SKUserId = this.route.snapshot.params['SKUserId'];
            this.userMasterForm.OrderId = this.route.snapshot.params['OrderId'];

            this.getorderdata();
        }else{
            this.userMasterForm.OrderId="";
        }
    }




    ngOnInit(): void {
        this.user = this.global.getuser();
        if (!(this.user && this.user.UserId)) {
            this.router.navigate(['/login']);
        }
        this.getuserdata();
        this.getorderdetails();
        this.IsTransfer = 0;
        // this.getallorder();
    }

    selectuserchange() {
        debugger;
        this.userMasterForm.Name = this.selecteduser.username;
        this.userMasterForm.Address = this.selecteduser.Address;
        this.userMasterForm.EmailId = this.selecteduser.EmailID;
        this.userMasterForm.Contact = this.selecteduser.MobileNo;
        this.userMasterForm.SKUserId = this.selecteduser.UserId;

    }
    getorderdetails() {

        var senddata = { "flag": "od", "UserId": this.global.getuser().UserId };
        this.orderservice.getOrder(senddata).subscribe((data) => {
            if (data.data.length > 0) {
                if (data.data[0].inhandqty !== null) {
                    this.available = parseInt(data.data[0].inhandqty);
                    this.sold = parseInt(data.data[0].sold);
                    this.donate = parseInt(data.data[0].donate);
                }

            }

        });

    }

    checktypeoftrans(){
            this.resetinfo();
       
    }

    validateqty(s) {

        // if (this.inhand < this.userMasterForm.Quantity) {
        //     var message = "You have only " + this.inhand + " left.";
        //     this.msg.open(message, 'Ok', {
        //         duration: 4000
        //     });
        //     this.userMasterForm.Quantity = this.inhand;
        // }

    }
    changetransfer() {
        this.resetinfo();
    }
    getuserdata() {
        this.userservice_.getUsers({ "flag": "bskuserid", "UserId": parseInt(this.user.UserId) }).subscribe((data) => {
            if (data.status == 200) {
                if (data.data.length > 0) {
                 this.userdetail = data.data;

                }

            }
        }, (err) => {

        });
    }
    getorderdata() {
        this.orderservice.getOrder({ "flag": "boid", "OrderId": this.userMasterForm.OrderId }).subscribe((data) => {
            if (data.status == 200) {
                if (data.data.length > 0) {
                    this.orderdetails = data.data[0];
                    this.userMasterForm.OrderId = this.orderdetails.OrderId;
                    this.userMasterForm.LocationMasterId = this.orderdetails.LocationMasterId;
                    this.userMasterForm.Name = this.orderdetails.Name;
                    this.userMasterForm.UserId = this.orderdetails.UserId;
                    this.userMasterForm.SKUserId = this.orderdetails.SKUserId;
                    this.userMasterForm.Quantity = this.orderdetails.Quantity;
                    this.userMasterForm.Address = this.orderdetails.Address;
                    this.userMasterForm.Rate = this.orderdetails.Rate;
                    this.userMasterForm.Contact = this.orderdetails.Contact;
                    this.userMasterForm.PaymentMode = this.orderdetails.PaymentMode;
                    this.userMasterForm.OrderStatus = this.orderdetails.OrderStatus;
                    this.userMasterForm.OrderType = this.orderdetails.OrderType;
                    this.userMasterForm.UserTypeID = this.orderdetails.UserTypeID;
                    this.userMasterForm.EmailId = this.orderdetails.EmailId;
                }


            }
        }, (err) => {

        });

    }

    saveorder() {
        debugger;
        if (this.vaildate()) {
            //new order
            var insertupdate;
            if (this.isordered) {
                //update status order
                insertupdate = {
                    "OrderId": this.userMasterForm.OrderId,
                    "IsDonte": (this.IsDonte == 0 ? false : true),
                    "OrderStatus": 2,
                    "OrderType": 2,
                    "UpdatedBy": this.user.UserId,
                    "flag": "us"
                }


            } else {

                var SKUserId = "0"
                if (this.userMasterForm.SKUserId != "") {
                    SKUserId = this.userMasterForm.SKUserId;
                }
                var ordertype = 2;
                debugger;
                if (this.IsTransfer == 1) {
                    ordertype = 1;
                }

                insertupdate = {
                    "OrderId": "0",
                    "LocationMasterId": "0",
                    "Name": this.userMasterForm.Name,
                    "UserId": this.user.UserId,
                    "SKUserId": SKUserId,
                    "Quantity": this.userMasterForm.Quantity,
                    "Address": this.userMasterForm.Address,
                    "Contact": this.userMasterForm.Contact,
                    "EmailId": this.userMasterForm.EmailId,
                    "Rate": "10",
                    "IsDonte": this.IsDonte,
                    "PaymentMode": 1,
                    "OrderStatus": 2,
                    "OrderType": ordertype,
                    "IsActive": true,
                    "CreatedBy": this.user.UserId,
                    "flag": "iu"
                }
            }

            this.orderservice.newOrder(insertupdate).subscribe((data) => {
                if (data.data.length > 0) {
                    if (this.isordered) {
                        this.msg.open('Order Delivered successfully', 'Ok', {
                            duration: 4000
                        });
                        this.router.navigate(["/orderlist"]);
                    } else {

                        this.msg.open( (this.IsTransfer == 1 ? 'Transfered successfully' : 'Order Distribute Successfully' ) , 'Ok', {
                            duration: 4000
                        });
                        this.resetinfo();
                        this.IsTransfer = 0;
                        this.getorderdetails();
                    }

                } else {
                    this.msg.open('Error while placing order', 'Ok', {
                        duration: 4000
                    })
                }
                //messgae order saved

            });
        }

    }
    vaildate() {
        var maxqty=this.available>100?100:this.available;
        if(this.IsTransfer == 1 && this.selecteduser ==  undefined){
            this.msg.open('Please select user to transfer.', 'Ok', {
                duration: 4000
            })
            return false;
        }else if(this.userMasterForm.Quantity>maxqty){
            this.msg.open('Please enter quantity between 1 to '+maxqty, 'Ok', {
                duration: 4000
            })
            return false;
        }
        return true;

    }

    resetinfo() {

        this.userMasterForm.OrderId = "";
        this.userMasterForm.LocationMasterId = "";
        this.userMasterForm.Name = "";
        this.userMasterForm.UserId = "";
        this.userMasterForm.SKUserId = "";
        this.userMasterForm.Quantity = 1;
        this.userMasterForm.Address = "";
        this.userMasterForm.Rate = "";
        this.userMasterForm.CreatedBy = "";
        this.userMasterForm.Contact = "";
        this.userMasterForm.PaymentMode = "";
        this.userMasterForm.OrderStatus = "";
        this.userMasterForm.OrderType = "";
        this.userMasterForm.UserTypeID = "";
        this.userMasterForm.isActive = true;
        this.userMasterForm.EmailId = "";
        this.selecteduser = undefined;
    }


}
