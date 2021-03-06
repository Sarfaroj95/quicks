import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  saveFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.saveFrom = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    let val = this.saveFrom.value
    console.log("Log Data", val)
  }

}
