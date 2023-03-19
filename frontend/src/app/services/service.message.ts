import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {HttpConfig} from '../interface/httpConfig'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  

@Injectable()
export class ServiceMessage{
   
    private _url:string = "http://localhost:5000/api/message";
    private _postUrl:string = "http://localhost:5000/api/message";
    message:any = [];
    constructor(private http : HttpClient){
      this.getMessagesFromService();
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
       
        return throwError(() => new Error('Something bad happened; please try again later.'));
      }
      
     getMessages():Observable<HttpConfig[]>{   
            // now returns an Observable of Config
        return this.http.get<HttpConfig[]>(this._url)
        .pipe(
            catchError(this.handleError)
          );
    }
    getUserMessages(user:string){   
      // now returns an Observable of Config
        user = (user) ? '/'+user : '';
      this.http.get(this._url+user).subscribe(response=>{
        this.message = response;
      },error =>{
        alert(error);
      });
      
    }
    async getMessagesFromService(){   
      // now returns an Observable of Config
        var response:any = await this.http.get(this._url).toPromise();
        this.message = response;
    }
    postMessage(body:any):any{
        console.log("post data",body,this._postUrl);
        return this.http.post(this._url,body,httpOptions)
        .pipe(
            catchError(this.handleError)
          );
    }
    
   
}