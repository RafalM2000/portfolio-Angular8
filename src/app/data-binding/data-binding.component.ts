import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  one = 'Jon Doe ';
  twoWayBinding = '';
  isHidden = true;

  constructor() { }

  ngOnInit() {
  }
  onButtonClicked() {
    this.isHidden = !this.isHidden;
  }
  cityDisplay() {
  }
}
