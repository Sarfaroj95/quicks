import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  saveFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.saveFrom = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    let val = this.saveFrom.value
    console.log("Log Data", val)
  }

}
