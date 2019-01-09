import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class GlobalService {

    drawer: MatDrawer;
    constructor(private router: Router) {

     }
    public setuser(userdata) {
        localStorage.setItem('user', userdata);
    }

    public clearuser() {
        localStorage.removeItem('user');
    }

    public getuser() {
        return JSON.parse((localStorage.getItem('user') || '{}'));
    }
    public isLogedin(){
        if(!(this.getuser() && this.getuser().UserId)){
           return false;
        }
        return true;
    }

}