import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  oneWayBinding = "Example of one way data binding";

  constructor() { }

  ngOnInit() {
    var oneWayBinding = "Example of one way data binding";

  }

}
