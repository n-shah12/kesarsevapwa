import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.comp.html',
    styleUrls: ['./login.comp.scss']
})
export class LoginComp implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }

    onLoinClick(){
        this.router.navigate(['/'])
    }
}
