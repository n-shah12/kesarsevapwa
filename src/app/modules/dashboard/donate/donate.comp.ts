import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatSnackBar, MatDialogRef} from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
import { Router } from '@angular/router';
import { DonationService } from '../../../services/donation-service';
import { GlobalService } from '../../../common/global';
declare var com: any;
@Component({
    selector: 'app-donate',
    templateUrl: './donate.comp.html',
    styleUrls: ['./donate.comp.scss'],
    providers:[DonationService]
})
export class DonateDialogComponent implements OnInit {
    data: any = {};
    user:any;
    mode: any = '';
    userdatetaila:any;
    constructor(@Inject(MAT_DIALOG_DATA) public data1: DialogData,public global: GlobalService,
    private router: Router,private donationservice_: DonationService,
    private msg:MatSnackBar,public dialogRef: MatDialogRef<DonateDialogComponent>) {
        this.mode = data1.mode;
        debugger;
        if (data1.mode !== '') {
            this.userdatetaila=data1.mode;
            this.data.Name=this.userdatetaila.Name;
            this.data.MobileNo=this.userdatetaila.Contact;
        }
     }

    ngOnInit(): void {
        
     }
     
     Donate(){
        if(this.vaildate()){
            let userid="0";
            let userdetail=this.global.getuser();
            if(userdetail.UserId!==undefined){
                userid=userdetail.UserId;
               
            }
            var insert={
                "UserId":userid,
                "DonationAmount":this.data.DonationAmount,
                "UserPAN":this.data.UserPAN,
                "PaymentMode":"",
                "PaymentDetail":"",
                "DonationStatus":false,
                "CreatedBy":userid,
                "Name":this.data.Name,
                "flag":"iu"
              }
              this.donationservice_.donate(insert).subscribe((data) => {
                if(data.data.length > 0){
                    this.msg.open('Thanks for donation', 'Ok',{
                        duration:4000
                    });
                    this.dialogRef.close();
                }
             });
            
              
        }
    }
     vaildate(){

        if(this.data.Name==""||this.data.Name==undefined){

            this.msg.open('Please enter name', '',{
                duration:4000
            });
            return false;
         }else if(this.data.UserPAN==""||this.data.UserPAN==undefined){

            this.msg.open('Please enter name', '',{
                duration:4000
            });
            return false;
         }else if(this.data.DonationAmount==""||this.data.DonationAmount==undefined){

            this.msg.open('Please enter name', '',{
                duration:4000
            });
            return false;
         }
         return true;
         
         
     }
}
