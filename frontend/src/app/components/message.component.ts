import { Component } from "@angular/core";

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
    messages = [{
        text : "some random text",owner : "firdous"
    },{
        text : "some random second text",owner : "alam"
    }];
}
