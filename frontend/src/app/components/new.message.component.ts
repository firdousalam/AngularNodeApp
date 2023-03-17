import { Component,Output,EventEmitter } from "@angular/core";
import { ServiceMessage } from "../services/service.message";
import {HttpConfig} from '../interface/httpConfig';
import { MessageComponent } from "./message.component";
//console.log(ServiceMessage.getMessages());
@Component({
    selector : 'new-message',
    template : `<mat-card class="card"> 
                    <mat-card-content>
                        <mat-form-field appearance="fill">
                            <mat-label>Owner</mat-label>
                            <input [(ngModel)]="message.owner" matInput placeholder="Owner">
                        </mat-form-field>
                        <mat-form-field appearance="fill">
                            <mat-label>Message</mat-label>
                            <input matInput placeholder="Message"  [(ngModel)]="message.text">
                        </mat-form-field>
                        <mat-card-actions>
                            
                                
                                    <button mat-raised-button color="primary" (click)="postData();">Submit</button>
                                    
                                
                        </mat-card-actions>
                   
                    </mat-card-content>
                </mat-card>`
})

export class NewMessageComponent {
    @Output() 
    onPosted = new EventEmitter();
    constructor(private _serviceMessage : ServiceMessage){}
     _msgcomponent = new MessageComponent(this._serviceMessage);
 message= {
    owner : "",
    text : ""

   }
   postData(){
        if(this.message.owner == ''){
            alert("please enter owner");
        }
        if(this.message.text == ''){
            alert("please enter text");
        }
        console.log(this.message);
        this._serviceMessage.postMessage(this.message)
        .subscribe((data:any) => {console.log(data);
            this.onPosted.emit(this.message);
        });
      
   }
 
}
