import { Injectable } from '@angular/core';
import { DataService } from '../services/dataconnect';
//import { Observable} from "rxjs";

@Injectable(
  //     {
  //   providedIn: 'root'
  // }
)
export class LoginService {
  constructor(private dataservice: DataService) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  RegisterUser(data: any) {
    // let options = this.createRequestOptions();
    //     return this.http.post(`${environment.apiurl}/userMaster`,data);
    return this.dataservice.post('userMaster', data);

  }
  LoginLog(data: any) {
    return this.dataservice.post('loginlog', data);

  }

  Login(data: any) {
    // let options = this.createRequestOptions();
    //     return this.http.post(`${environment.apiurl}/getLogin`,data)
    //     .pipe(map(res =>  res));
    return this.dataservice.post('getLogin', data);
  }

  SaveDefaultLanguage(data: any) {
    //alert('service'+NewsId);
    //  let options = this.createRequestOptions();
    //  return this.http.post(`${environment.apiurl}/api/app/savedefaultlanguage`,data)
    //  .pipe(map(res =>  res));
    return this.dataservice.post('api/app/savedefaultlanguage', data)
  }

  GetDefaultLanguage(userid) {
    //alert('service'+NewsId);
    //  let options = this.createRequestOptions();
    //  return this.http.get(`${environment.apiurl}/api/getdefaultlanguagebyuserid/${userid}`)
    //  .pipe(map(res =>  res));
    return this.dataservice.get('api/getdefaultlanguagebyuserid/${userid}', {})

  }



  //  private createRequestOptions() {
  //       let headers = new Headers();
  //       // headers.append("AuthKey", "my-key");
  //       // headers.append("AuthToken", "my-token");
  //       headers.append("Content-Type", "application/json");
  //       let options = new RequestOptions({ headers: headers });
  //       return options;
  //   }

  //   //#region  Error Handler
  //   private handleError(error: HttpErrorResponse) {
  //       if (error.error instanceof ErrorEvent) {
  //         // A client-side or network error occurred. Handle it accordingly.
  //         console.error('An error occurred:', error.message);
  //       } else {
  //         // The backend returned an unsuccessful response code.
  //         // The response body may contain clues as to what went wrong.
  //         console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
  //       }
  //       // return an observable with a user-facing error message
  //       return throwError('Something bad happened; please try again later.');
  //     };
  //#endregion Error Handler
}
