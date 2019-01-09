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
            alert('Enter Name');
            result=false;
        }else if(this.userMasterForm.MobileNo===""){
            alert('Enter Mobile No.');
            result=false;
        }else if(this.userMasterForm.EmailID===""){
            alert('Enter Email ID');
            result=false;
        }else if(this.userMasterForm.Password===""){
            alert('Enter Password');
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
            EmailID:this.userMasterForm.EmailID,
            Password:this.userMasterForm.Password,
            UserId:0,
            UserTypeID:2,
            UserTypecode:"clnt",
            isActive:true,
            isdonor:false,
            isadmin:false
          }
        if(this.validate()){
            this.signupService_.RegisterUser(d).subscribe((data) => {
               
                setTimeout(() => {
                   
                    that.router.navigate(['/login']);
                    that.msg.open('Registered successfully', 'Ok', {
                        duration:2000
                    })
                    setTimeout(() => {
                        com.hload('.login');
                    
                    },1000);
                    
                }, 2000);
                 
               
    
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
