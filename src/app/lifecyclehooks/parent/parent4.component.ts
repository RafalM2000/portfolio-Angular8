import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenthooks',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class ParenthooksComponent implements OnInit {

  message: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.message = form.city;

  }

}
