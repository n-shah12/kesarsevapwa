import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-vol',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    constructor(public global:GlobalService) { }

    ngOnInit(): void {
        debugger;
     }
}
