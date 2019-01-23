import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-lb',
    templateUrl: './lb.comp.html',
    styleUrls: ['./lb.comp.scss']
})
export class LBComponent implements OnInit {
    leaderlist = [];
    constructor(public global:GlobalService) { }

    ngOnInit(): void { }
}
