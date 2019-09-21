import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  one: string = "Jon Doe ";
  isHidden: boolean = true;
  twoWayBinding: string = '';
  fm = true;

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    this.isHidden = !this.isHidden;
  }

  onsexView() {
    this.fm = false;
  }
}
