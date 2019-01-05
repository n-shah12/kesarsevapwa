import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-vjfrm',
    templateUrl: './vjfrm.comp.html',
    styleUrls: ['./vjfrm.comp.scss']
})
export class VJFRMComponent implements OnInit {
    constructor(private global:GlobalService) { }

    ngOnInit(): void { }
}
