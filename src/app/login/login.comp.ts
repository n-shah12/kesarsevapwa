import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

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
        this.loginService_.Login({ 'userName': this.loginForm.username, 'password': this.loginForm.password }).subscribe((data) => {

            this.router.navigate(['/'])

        }, (err) => {

        }, () => {

        })
        

    }


}
