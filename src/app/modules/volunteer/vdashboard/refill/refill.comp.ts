import { Component, OnInit ,Inject} from '@angular/core';
import { DialogData } from '../index.comp';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
    selector: 'app-refill',
    templateUrl: './refill.comp.html',
    styleUrls: ['./refill.comp.scss']
})
export class RefillDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit(): void { }
}
