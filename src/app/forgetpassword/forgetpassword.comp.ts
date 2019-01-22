import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ForgetPasswordService } from './forgetpassword.service';
import { Globals } from "../const/globals";
import { validateConfig } from '@angular/router/src/config';
import { MatSnackBar } from '@angular/material';
import { GlobalService } from '../common/global';

declare var com:any;
@Component({
    selector: 'app-forgetpassword',
    templateUrl: './forgetpassword.comp.html',
    styleUrls: ['./forgetpassword.comp.scss'],
    providers:[ForgetPasswordService]
})
export class ForgetPasswordComponent implements OnInit {
    userMasterForm: any = {
        emailmobileno : "",
           
    };
    user:any;
    constructor(private router: Router, private http: HttpClient,
        private changepasswordService: ForgetPasswordService,public global: GlobalService,  private msg: MatSnackBar) {
            this.user = this.global.getuser();
     }

    ngOnInit(): void {
       
     }


    validate(){
        var result =true;
        if(this.userMasterForm.emailmobileno===""){
            this.msg.open('Enter EmailId or Mobile no', '',{
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
           var d={"flag":"bme","emailmobile":this.userMasterForm.emailmobileno};
            this.changepasswordService.Forgetpassword(d).subscribe((data:any) => {
                debugger;
                if(data.status==200){
                    if(data.data.length>0 ){
                        //send mail
                        setTimeout(() => {
                           that.msg.open('Password is mail to your registrated mail id.', 'Ok', {
                            });
                            setTimeout(() => {
                                com.hload('.login');
                                this.router.navigate(['/login']);
                            },1000);
                            
                        }, 2000);
                    }else{
                        setTimeout(() => {
                            that.msg.open('Email or Mobile no is not registred.', '', {
                             });
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
