import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-dl',
    templateUrl: './dl.comp.html',
    styleUrls: ['./dl.comp.scss']
})
export class DLComponent implements OnInit {
    leaderlist = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    constructor(public global:GlobalService) { }

    ngOnInit(): void { }
}
