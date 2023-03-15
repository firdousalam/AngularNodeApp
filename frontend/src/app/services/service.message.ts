import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpConfig} from '../interface/httpConfig'
import { Observable } from 'rxjs';
@Injectable()
export class ServiceMessage{
   
    private _url:string = "http://localhost:5000/api/message";
    constructor(private http : HttpClient){}
     getMessages():Observable<HttpConfig[]>{   
            // now returns an Observable of Config
        return this.http.get<HttpConfig[]>(this._url);
    }
   
}