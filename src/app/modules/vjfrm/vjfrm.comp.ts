import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user-service';

@Component({
    selector: 'app-vjfrm',
    templateUrl: './vjfrm.comp.html',
    styleUrls: ['./vjfrm.comp.scss'],
    providers: [UserService]
})
export class VJFRMComponent implements OnInit {
    vjfrm:any={};
    te:any;
    constructor(private userservice: UserService,public global:GlobalService,
        private msg:MatSnackBar) { }
    
    ngOnInit(): void {
     this.te="";
    }

    vaild(){

        if(this.vjfrm.Name==="" ||this.vjfrm.Name===undefined){
            this.msg.open('Please enter name', '',{
                duration:4000
            });
            return false;

        }else if(this.vjfrm.MobileNo==="" ||this.vjfrm.MobileNo===undefined){
            this.msg.open('Please enter contact no', '',{
                duration:4000
            });
            return false;
 
        }else if(this.vjfrm.EmailID==="" ||this.vjfrm.EmailID===undefined){
            this.msg.open('Please enter email id', '',{
                duration:4000
            });
            return false;
            
        }else if(this.vjfrm.Password==="" ||this.vjfrm.Password===undefined){
            this.msg.open('Please enter password', '',{
                duration:4000
            });
            return false;
            
        }else if(this.vjfrm.Address==="" ||this.vjfrm.Address===undefined){
            this.msg.open('Please enter address', '',{
                duration:4000
            });
            return false;
            
        }else if(this.vjfrm.Proofid==="" ||this.vjfrm.Proofid===undefined){
            this.msg.open('Please enter proofid', '',{
                duration:4000
            });
            return false;
        }
        else if(this.vjfrm.Pancard==="" ||this.vjfrm.Pancard===undefined){
            this.msg.open('Please enter pan card', '',{
                duration:4000
            });
            return false;
        }
        return true;

    }

    
    onSignup(){
        debugger;
        if(this.vaild()){
            var other={"proof":this.vjfrm.Proofid,"pan":this.vjfrm.Pancard};
            var insertupdate = {
                Name:this.vjfrm.Name,
                MobileNo:this.vjfrm.MobileNo,
                EmailID:this.vjfrm.EmailID,
                Password:'',
                UserId:0,
                UserTypeID:4,
                UserTypecode:'vl',
                Address:this.vjfrm.Address,
                isActive:false,
                isdonor:false,
                isadmin:false,
                Other:other,
                flag:'i'
              }
              this.userservice.createuser(insertupdate).subscribe((data) => {
                if(data.status==200){
                    if(parseInt(data.data.result)>0){
                        this.msg.open('Volunteer form submitted successfully ', 'Ok',{
                            duration:4000
                        });
                        this.vjfrm={};
                    }else{
                        this.msg.open('Error while submitting form', 'Ok',{
                            duration:4000
                        })
                    }
                
                }else{
                    this.msg.open('Error while submitting form', 'Ok',{
                        duration:4000
                    })
                }
                 //messgae order saved
     
             });
        }
  
    }
}
