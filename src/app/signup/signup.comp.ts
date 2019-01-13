import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignupService } from './signup.service';
import { Globals } from "../const/globals";
import { validateConfig } from '@angular/router/src/config';
import { MatSnackBar } from '@angular/material';

declare var com:any;
@Component({
    selector: 'app-signup',
    templateUrl: './signup.comp.html',
    styleUrls: ['./signup.comp.scss']
})
export class SignUpComponent implements OnInit {
    userMasterForm: any = {
            Name:"",
            MobileNo :"",
            EmailID : "",
            Password:"",
            Address:"",
            CreatedBy: "",
            CreatedOn: "",
            UpdatedBy: "",
            UpdatedOn: "",
            UserId: "",
            UserTypeID:"",
            isActive:true
    };
    constructor(private router: Router, private http: HttpClient,
        private signupService_: SignupService, private msg: MatSnackBar) {
     }

    ngOnInit(): void { }


    validate(){
        var result =true;
        if(this.userMasterForm.Name===""){
            this.msg.open('Enter Name', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.MobileNo===""){
            this.msg.open('Enter Mobile No.', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.EmailID===""){
            this.msg.open('Enter Email ID.', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.Password===""){
            this.msg.open('Enter Password.', '',{
                duration:4000
            });
            result=false;
        }else if(this.userMasterForm.Address===""){
            this.msg.open('Enter Address.', '',{
                duration:4000
            });
            result=false;
        }
        return result;

    }

    onSignup(){
        com.load('.login', 'Signing Up. Please wait....');
        this.userMasterForm.UserTypeID="5";
        let that = this;
        var d = {
            Name:this.userMasterForm.Name,
            MobileNo:this.userMasterForm.MobileNo,
            EmailID:this.userMasterForm.EmailID.toUpperCase(),
            Password:this.userMasterForm.Password,
            UserId:0,
            UserTypeID:2,
            UserTypecode:"clnt",
            isActive:true,
            isdonor:false,
            isadmin:false,
            other:'',
            flag:'i'
          }
        if(this.validate()){
            this.signupService_.RegisterUser(d).subscribe((data:any) => {
                if(data.status==200){
                    if(parseInt(data.data.result)>0 ){
                        setTimeout(() => {
                   
                            that.router.navigate(['/login']);
                            that.msg.open('Registered successfully', 'Ok', {
                                duration:2000
                            })
                            setTimeout(() => {
                                com.hload('.login');
                            
                            },1000);
                            
                        }, 2000);
                    }
                }else{
                    that.msg.open('Mobile or Email id already exist', 'Ok', {
                        duration:2000
                    })
                    setTimeout(() => {
                        com.hload('.login');
                    
                    },1000);
                }
                
                 
               
    
            }, (err) => {
                com.hload('.login');
            });
         
        }
        
    }

    onLogin() {
        this.router.navigate(['/login']);
    }

    onHome() {
        this.router.navigate(['/']);
    }
}
