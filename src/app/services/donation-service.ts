import { Injectable } from '@angular/core';
import { DataService } from './dataconnect';

@Injectable()
export class DonationService {
constructor(private dataservice:DataService){

}

donate(data:any){
    return this.dataservice.post('donate', data);
}

}