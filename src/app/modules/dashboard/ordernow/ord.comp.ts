import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../volunteer/vdashboard/index.comp';
@Component({
    selector: 'app-ordnow',
    templateUrl: './ord.comp.html',
    styleUrls: ['./ord.comp.scss']
})
export class OrderNwDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    ngOnInit(): void { }
}
