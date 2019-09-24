import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

usersList = ['Mike', 'Jon', 'Sara', 'Eva'];
isVisible = true;
switchExpression = 'No2';
colorConverter = false;

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    this.isVisible = !this.isVisible;
  }

  onColorConverter() {
    this.colorConverter = !this.colorConverter;
  }


}
