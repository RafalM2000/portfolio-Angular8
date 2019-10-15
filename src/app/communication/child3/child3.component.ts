import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../interaction.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  message: string;

  constructor(private myService: InteractionService) { }

  ngOnInit() { }

  onSubmit(data) {
    this.myService.messageViewer(data);
  }

}
