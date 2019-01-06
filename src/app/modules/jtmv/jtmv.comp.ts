import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-jtmv',
    templateUrl: './jtmv.comp.html',
    styleUrls: ['./jtmv.comp.scss']
})
export class JTMVComponent implements OnInit {
    constructor(public global:GlobalService) { }

    ngOnInit(): void { }
}
