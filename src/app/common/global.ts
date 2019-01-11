import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class GlobalService {

    drawer: MatDrawer;
    isvolunteershow  = false;
    constructor(private router: Router) {

     }
    public setuser(userdata) {
        localStorage.setItem('user', userdata);
    }

    public clearuser() {
        localStorage.removeItem('user');
    }

    public getuser() {
      const usr =  JSON.parse((localStorage.getItem('user') || '{}'))
       
        return usr;

    }
    public isRider(){
        this.isvolunteershow = false;
        const usr =  JSON.parse((localStorage.getItem('user') || '{}'))
       
        if(usr.UserId){
            this.isvolunteershow = (usr.utypecode === 'sk' || usr.utypecode === 'vl');
        }
        if(this.isvolunteershow){
           
            this.router.navigate(['/volunteer']);
        }else{
            this.router.navigate(['/']);
        }

        return this.isvolunteershow;
    }

    public isLogedin(){
        if(!(this.getuser() && this.getuser().UserId)){
           return false;
        }
        return true;
    }

}