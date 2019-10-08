import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-driv-form-two',
  templateUrl: './reactive-driv-form-two.component.html',
  styleUrls: ['./reactive-driv-form-two.component.css']
})
export class ReactiveDrivFormTwoComponent implements OnInit {
  guest: FormGroup;

  constructor(private builderForm: FormBuilder) { }

  ngOnInit() {
    this.guest = this.builderForm.group ({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    alert(JSON.stringify(this.guest.value));
  }
}

