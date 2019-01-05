import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';

@Component({
    selector: 'app-dp',
    templateUrl: './dp.comp.html',
    styleUrls: ['./dp.comp.scss']
})
export class DPComponent implements OnInit {
    constructor(private global:GlobalService) { }

    ngOnInit(): void { }
}
