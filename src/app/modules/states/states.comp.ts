import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { GlobalService } from 'src/app/common/global';

declare var com:any;
@Component({
    selector: 'app-signup',
    templateUrl: './states.comp.html',
    styleUrls: ['./states.comp.scss']
})
export class StateComponent implements OnInit {
    constructor(private router: Router, private http: HttpClient,
        private msg: MatSnackBar,public global:GlobalService) {
     }

    ngOnInit(): void { }


   
}
