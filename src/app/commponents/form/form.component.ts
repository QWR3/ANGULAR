import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  //шаблонна форма
  // user = {
  //   username: 'jopipi',
  //   password: 'admin',
  //   gender: "male",
  //   select:[]
  // }
  // onSubmit() {
  //   console.log(this.user)
  // }

  customValidator(control: AbstractControl) {
    if (control.value == "duck") {
      return {warning: "FUUUU!!"}
    }
    return null
  }

  form: FormGroup = new FormGroup({
    username: new FormControl("", this.customValidator),
  })

  onSubmit() {
    console.log(this.form)
  }

}
