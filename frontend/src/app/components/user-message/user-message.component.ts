import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  paramName = ""
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.paramName = this.activatedRoute.snapshot.params['name'];
  }

}
