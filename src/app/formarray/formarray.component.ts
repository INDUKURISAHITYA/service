import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  options: FormGroup;
  email = new FormControl('',);
  name =  new FormControl('',);
  mobile = new FormControl('');
  alternateEmail = new FormArray([]);
  alternateName = new FormArray([]);
  alternatemobile = new FormArray([]);

  constructor(fb: FormBuilder) {
    this.options = fb.group({
       name:this.name,
       email:this.email,
       mobile:this.mobile,
       alternateEmail:this.alternateEmail,
       alternateName:this.alternateName,
       alternatemobile:this.alternatemobile
    });
    
  }

  ngOnInit(): void{}

  getalternateEmail()
  {
  this.options.get("alternateEmail") as FormArray;
  }


  getalternatemobile()
  {
    this.options.get("alternatemobile") as FormArray;
  }

  getalternateName()
  {
  this.options.get("alternateName") as FormArray;
  }


  addemail() {
    const control = new FormControl('');
    this.alternateEmail.push(control);
  }

  addmobile() {
    const control = new FormControl('');
    this.alternatemobile.push(control);
  }

  addname() {
    const control = new FormControl('');
    this.alternateName.push(control);
  }


  
  onSubmit()
  {
    console.log(this.options.value)
  }
 

    }
  





