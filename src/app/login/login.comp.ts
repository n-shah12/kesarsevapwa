import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { GlobalService } from '../common/global';
@Component({
    selector: 'app-login',
    templateUrl: './login.comp.html',
    styleUrls: ['./login.comp.scss']
})
export class LoginComp implements OnInit {
    loginForm: any = {
        username: "",
        password: ""
    };

    constructor(private router: Router, private http: HttpClient,
        private loginService_: LoginService, private global: GlobalService) { }

    ngOnInit(): void { }
    onSignup() {
        this.router.navigate(['/signup']);
    }
    onForgetpassword(){
        this.router.navigate(['/forgetpassword']);
    }
    onHome() {
        this.router.navigate(['/']);
    }

    onLoinClick() {
        this.loginService_.Login({ 'username': this.loginForm.username, 'password': this.loginForm.password }).subscribe((data) => {
            debugger;
            var response = JSON.stringify(data);
            var objuser = JSON.parse(response).data;
            if (objuser.length > 0) {
                const usr = objuser[0];
                if (usr.UserId !== null && usr.UserId !== undefined) {
                    this.global.setuser(JSON.stringify(objuser[0]));
                    var senddata = { 
                         "UserMobileNo": this.loginForm.username,
                         "LoginUserId": usr.UserId, 
                          "LoginLocation":""
                        };
                    this.loginService_.LoginLog(senddata).subscribe((data) => {
                        if (data.data.length > 0) {
                            this.global.isRider()
                        }
                    });    


                   
                } else {
                    alert('Invalid username or password.');
                }
            }
            else {
                alert('Invalid username or password.');
            }

        }, (err) => {
            alert('Error while connecting service');
        });

    }

}
