import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../models/user";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  users: IUser[]

  constructor(private activatedRoute: ActivatedRoute,private router:Router) {
    this.activatedRoute.data.subscribe(({users}) => this.users = users)
  }

  ngOnInit(): void {
  }

  //шаблонна
  // form = {
  //   username:0
  // }
  // onSubmit(){
  //   this.router.navigate(["/user",this.form?.username],{state: {user:this.form.username}})
  // }

  // реактивна
  validator(control:AbstractControl){
    if(!control.value){
      return {error:"form is empty"}
    }
    return null
  }

  form = new FormGroup({
    username:new FormControl(0,[this.validator])
  })

  onSubmit(){
    console.log(this.form)
      this.router.navigate(["/user",this.form.controls.username.value],{state: {user:this.form.controls.username.value}})

  }
}
