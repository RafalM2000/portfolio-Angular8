import { Component, OnInit } from '@angular/core';
import { InterceptorsHttpService } from '../interceptor.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})

export class InterceptorComponent implements OnInit {

  textVisibility = false;

  constructor(private myService: InterceptorsHttpService) { }

  ngOnInit() { }

    httpRequest() {
      this.myService.getData()
      .subscribe(data => {
        console.log(data);
      });

      this.textVisibility = true;

    }
}


