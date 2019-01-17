import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { DataService } from '../services/dataconnect';
//import { Observable} from "rxjs";

@Injectable(
  //     {
  //   providedIn: 'root'
  // }
)
export class ChangePasswordService {
  constructor(private dataservice: DataService,private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

 
  GetUser(data: any) {
   
    return this.dataservice.post('getusers', data);
  }
  Updatepassword(data: any) {
   
    return this.dataservice.post('createUser', data);
  }

}
