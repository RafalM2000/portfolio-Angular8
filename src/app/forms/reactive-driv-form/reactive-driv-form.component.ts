import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-driv-form',
  templateUrl: './reactive-driv-form.component.html',
  styleUrls: ['./reactive-driv-form.component.css']
})
export class ReactiveDrivFormComponent implements OnInit {

guest: FormGroup;

  constructor() { }

  ngOnInit() {
    this.guest = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      city: new FormControl('Madrid - initial value', [Validators.required])
    });
  }

  onSubmit(): void {
    alert(JSON.stringify(this.guest.value));
  }
}
