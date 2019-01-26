import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { Router } from '@angular/router';

@Component({
    selector: 'app-jtmv',
    templateUrl: './jtmv.comp.html',
    styleUrls: ['./jtmv.comp.scss']
})
export class JTMVComponent implements OnInit {
    constructor(private router: Router,public global:GlobalService) { }

    ngOnInit(): void { }
  
    States(){
        this.router.navigate(['/states']);

    }
    Inspiration(){
        this.router.navigate(['/vjfrm']);

    }
    About(){
        this.router.navigate(['/aboutus']);

    }
    Volunteer(){
        this.router.navigate(['/vjfrm']);
        
    }
    Plegde(){
        this.router.navigate(['/plegde']);

    }
    Invite(){
        debugger;
        this.router.navigate(['/invite']);

    }
}
