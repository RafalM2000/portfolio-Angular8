import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../interaction.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor(private myService: InteractionService) { }

  messageFromTheService: any = '';

  ngOnInit() {
    this.myService.activatedEmitter.subscribe(data => {
      this.messageFromTheService = '';
      this.messageFromTheService = data;
    });
  }
}
