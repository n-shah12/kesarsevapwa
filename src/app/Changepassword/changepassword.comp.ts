import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangePasswordService } from './changepassword.service';
import { Globals } from "../const/globals";
import { validateConfig } from '@angular/router/src/config';
import { MatSnackBar } from '@angular/material';
import { GlobalService } from '../common/global';

declare var com:any;
@Component({
    selector: 'app-signup',
    templateUrl: './changepassword.comp.html',
    styleUrls: ['./changepassword.comp.scss'],
    providers:[ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {
    userMasterForm: any = {
        OldPassword : "",
        NewPassword:"",
        confirmPassword:""
           
    };
    user:any;
    constructor(private router: Router, private http: HttpClient,
        private changepasswordService: ChangePasswordService,public global: GlobalService,  private msg: MatSnackBar) {
            this.user = this.global.getuser();
     }

    ngOnInit(): void {
        if (!(this.user && this.user.UserId)) {
            this.router.navigate(['/login']);
          }
     }


    validate(){
        var result =true;
        if(this.userMasterForm.OldPassword===""){
            this.msg.open('Enter Old Password', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.NewPassword===""){
            this.msg.open('Enter Old Password', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.confirmPassword===""){
            this.msg.open('Enter Confirm Password', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.confirmPassword!==this.userMasterForm.NewPassword){
            this.msg.open('New Password and Confirm does not match', '',{
                duration:4000
            });
            result=false;
        }
        return result;

    }

    changepassword(){
        com.load('.login', 'Please wait....');
        let that = this;
        if(this.validate()){
           var d={"flag":"up","UserId":this.user.UserId,"OldPassword":that.userMasterForm.OldPassword,"NewPassword":that.userMasterForm.NewPassword};
            this.changepasswordService.Updatepassword(d).subscribe((data:any) => {
                if(data.status==200){
                    if(parseInt(data.data.result)>0 ){
                        //send mail
                        setTimeout(() => {
                           that.msg.open('Password updated successfully.', 'Ok', {
                            })
                            setTimeout(() => {
                                com.hload('.login');
                                this.router.navigate(['/login']);
                            },1000);
                            
                        }, 2000);
                    }else{
                        setTimeout(() => {
                            that.msg.open('Password not match,try again.', 'Ok', {
                             })
                             setTimeout(() => {
                                 com.hload('.login');
                                
                             },1000);
                             
                         }, 2000);
                    }
                }
            }, (err) => {
                com.hload('.login');
            });
         
        }else{
            com.hload('.login');
        }
        
    }

}
