import { Component } from "@angular/core";
import { ServiceMessage } from "../services/service.message";
import {HttpConfig} from '../interface/httpConfig'
//console.log(ServiceMessage.getMessages());
@Component({
    selector : 'messages',
    template : `<div *ngFor="let message of messages">
                    <mat-card style="margin:10px">
                        
                            <mat-card-title> {{message.owner}}</mat-card-title>
                            <mat-card-content>{{message.text}} </mat-card-content>
                            
                       
                    </mat-card>
                </div>`
})

export class MessageComponent {
    public messages:any = [];
    constructor(private _serviceMessage : ServiceMessage){}
    ngOnInit(){
        this._serviceMessage.getMessages()
        .subscribe(data =>{ this.messages = data; console.log(data)});
    }
  /*
    messages = [{
        text : "some random text",owner : "firdous"
    },{
        text : "some random second text",owner : "alam"
    }];
    */
}
