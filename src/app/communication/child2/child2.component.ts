import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childMessage = new EventEmitter();
  messageFromChild = 'Message from a child component';
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.childMessage.emit(this.messageFromChild);
  }

}
