import { Injectable } from '@angular/core';
import { DataService } from './dataconnect';

@Injectable()
export class UserService {
constructor(private dataservice:DataService){

}

createuser(data:any){
    return this.dataservice.post('createUser', data);
}
getUsers(data:any){
    return this.dataservice.get('getuserdetail', data);
}

}