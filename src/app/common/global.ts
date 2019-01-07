import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Injectable({
    providedIn: "root"
})
export class GlobalService {

    drawer: MatDrawer;

    public setuser(userdata) {
        localStorage.setItem('user', userdata);
    }

    public clearuser() {
        localStorage.setItem('user', undefined);
    }

    public getuser() {
        return JSON.parse((localStorage.getItem('user') || '{}'));
    }

}