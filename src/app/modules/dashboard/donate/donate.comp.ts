import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
import { Router } from '@angular/router';
declare var com: any;
@Component({
    selector: 'app-donate',
    templateUrl: './donate.comp.html',
    styleUrls: ['./donate.comp.scss']
})
export class DonateDialogComponent implements OnInit {
    data: any = {};
    user:any;
    constructor(@Inject(MAT_DIALOG_DATA) public data1: DialogData,private router: Router) { }

    ngOnInit(): void {
        this.data.Quantity =1;
        
     }

     Donate(){
         debugger;

     }
}
