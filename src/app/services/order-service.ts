import { Injectable } from '@angular/core';
import { DataService } from './dataconnect';

@Injectable()
export class OrderService {
constructor(private dataservice:DataService){

}

newOrder(data:any){
    return this.dataservice.post('addorder', data);
}
getOrder(data:any){
    return this.dataservice.get('getorders', data);
}
getOrderdetail(data:any){
    return this.dataservice.get('getorders', data);
}

}