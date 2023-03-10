import { Component } from "@angular/core";

@Component({
    selector : 'messages',
    template : 'this is my message component <div *ngFor="let message of messages">{{message.text}}-{{message.owner}}</div>'
})
export class MessageComponent {
    messages = [{
        text : "some random text",owner : "firdous"
    },{
        text : "some random second text",owner : "alam"
    }];
}
