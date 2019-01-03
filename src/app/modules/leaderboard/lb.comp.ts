import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lb',
    templateUrl: './lb.comp.html',
    styleUrls: ['./lb.comp.scss']
})
export class LBComponent implements OnInit {
    leaderlist = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    constructor() { }

    ngOnInit(): void { }
}
