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
currencies =  ['PLN', 'GBP', 'EUR', 'USD'];
currencyItem = 0;

  constructor() { }

  ngOnInit() {
  }
  onButtonClicked() {
    this.isVisible = !this.isVisible;
  }

  onColorConverter() {
    this.colorConverter = !this.colorConverter;
  }

  onCurrencyButton(param: number) {
    if (this.currencyItem <= 0 && param === -1) {
      param = 0;
    }
    if (this.currencyItem >= (this.currencies.length - 1) && param === 1) {
      param = 0;
    }
    this.currencyItem = this.currencyItem + param;
  }
}
