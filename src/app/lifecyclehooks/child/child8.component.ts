import { Component, OnInit, Input, OnChanges, AfterContentInit, AfterContentChecked,
   AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.css']
})

export class Child8Component implements OnInit, OnChanges, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked {

   @Input() public messageFromTheParent: string;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngOnChanges() {
    console.log('ngOnChanges  called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

}
