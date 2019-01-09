import { Injectable } from '@angular/core';
import { DataService } from './dataconnect';

@Injectable()
export class VolunterrService {
constructor(private dataservice:DataService){

}

getLoctionbyid(data:any){
    return this.dataservice.get('getLocationbyid', data);
}

addupdatelocation(data:any){
    return this.dataservice.post('addlocation', data);
}


}