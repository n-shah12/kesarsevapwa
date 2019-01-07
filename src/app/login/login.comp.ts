import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Globals } from "../const/globals";
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
        private loginService_: LoginService) { }

    ngOnInit(): void { }

    onLoinClick() {
        console.log(this.loginForm);
        this.loginService_.Login({ 'username': this.loginForm.username, 'password': this.loginForm.password }).subscribe((data) => {
            debugger;
            var response = JSON.stringify(data);
            var objuser = JSON.parse(response).data;
            if(objuser.length > 0)
            {
              Globals.setuser(JSON.stringify(objuser[0]));
              this.router.navigate(['/']);
            }
            else
            {
               alert('Invalid username or password.');
            }
           

        }, (err) => {

        });
        

    }


}
