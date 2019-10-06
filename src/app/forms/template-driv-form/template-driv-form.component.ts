import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driv-form',
  templateUrl: './template-driv-form.component.html',
  styleUrls: ['./template-driv-form.component.css']
})
export class TemplateDrivFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(value): void {
    alert(JSON.stringify(value));
  }

}
