import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
@Component({
    selector: 'app-donate',
    templateUrl: './donate.comp.html',
    styleUrls: ['./donate.comp.scss']
})
export class DonateDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit(): void { }
}
