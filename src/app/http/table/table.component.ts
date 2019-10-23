import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [];

  constructor(private fetchService: HttpService) { }

  ngOnInit() {
    this.fetchService.getPictures()
    .subscribe(data => {
      console.log('My data', this.data = data.obj);
    });
  }

}
