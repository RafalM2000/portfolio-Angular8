import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'Pipes demonstration';
  date = new Date();
  numberOne = 87.982798;
  numberTwo = 10.23;

  constructor() { }

  ngOnInit() {
  }

}
