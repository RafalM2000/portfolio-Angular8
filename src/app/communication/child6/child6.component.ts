import { Component, OnInit, OnDestroy } from '@angular/core';
import { Interaction2Service } from '../../interaction2.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit, OnDestroy {

  constructor(private myService: Interaction2Service) { }

  messageFromTheService: any = '';
  idSubscription: Subscription;

  ngOnInit() {
    this.idSubscription = this.myService.activatedEmitter
    .subscribe(data => {
      this.messageFromTheService = '';
      this.messageFromTheService = data;
    });
  }
  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }

}
