import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { GlobalService } from 'src/app/common/global';

declare var com:any;
@Component({
    selector: 'app-signup',
    templateUrl: './pledge.comp.html',
    styleUrls: ['./pledge.comp.scss']
})
export class PledgeComponent implements OnInit {
    constructor(private router: Router, private http: HttpClient,
        private msg: MatSnackBar,public global: GlobalService) {
     }

    ngOnInit(): void { }


   
}
