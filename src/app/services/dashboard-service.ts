import { Injectable } from '@angular/core';
import { DataService } from './dataconnect';

@Injectable()
export class SevaKendraService {
constructor(private dataservice:DataService){

}

getSevaKendra(data:any){
    return this.dataservice.get('getsevakendra', data);
}

}