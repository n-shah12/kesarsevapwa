import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/common/global';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dp',
    templateUrl: './dp.comp.html',
    styleUrls: ['./dp.comp.scss']
})
export class DPComponent implements OnInit {
    constructor(public global:GlobalService, private router:Router) { }
    user :any;
    ngOnInit(): void { 
       
      this.user= this.global.getuser();
      console.log(this.user);
      if( !(this.user && this.user .UserId)){
        this.router.navigate(['/login']);
      }
    }
}
