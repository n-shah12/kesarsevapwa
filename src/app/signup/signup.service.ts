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
export class SignupService {
  constructor(private dataservice: DataService,private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  RegisterUser(data: any) {
    // let options = this.createRequestOptions();
    //     return this.http.post(`${environment.apiurl}/userMaster`,data);
    //return this.dataservice.post('createUser', data);
    return this.http.post(`${environment.apiurl}/createUser`, data).pipe(map((res: Response) => res));
  }

  GetUser(data: any) {
    // let options = this.createRequestOptions();
    //     return this.http.post(`${environment.apiurl}/getLogin`,data)
    //     .pipe(map(res =>  res));
    return this.dataservice.post('getusers', data);
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
