import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ChatMessage = {
    username: "",
    message: "",
    id: "",
    created_on: new Date,
    updated_on: new Date,
    channel: ""
  };

  constructor() { }

  ngOnInit() {
  }

}

