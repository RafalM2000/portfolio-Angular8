import { Component, OnInit } from '@angular/core';
import { Interaction2Service } from '../../interaction2.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

  message: string;

  constructor(private myService: Interaction2Service) { }

  ngOnInit() { }

  onSubmit(data) {
    this.myService.messageViewer(data);
  }

}
