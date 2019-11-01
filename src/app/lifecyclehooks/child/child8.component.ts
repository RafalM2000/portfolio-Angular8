import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})

export class Child8Component implements OnInit, OnChanges {

   @Input() public messageFromTheParent: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.messageFromTheParent);
  }
}
