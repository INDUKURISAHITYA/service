import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray,AbstractControl } from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-array1',
  templateUrl: './form-array1.component.html',
  styleUrls: ['./form-array1.component.css']
})
export class FormArray1Component implements OnInit {

  name = new FormControl('');
  pay = new FormControl('');
  myForm: FormGroup;
  arr: FormArray;
  

  constructor(private fb: FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      arr: this.fb.array([this.createItem()])
    })
  }

 
  createItem() {
    return this.fb.group({
      name: this.name,
      pay: this.pay
    })
  }

  addItem() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }


  onSubmit() {
       let data:any = this.myForm.value;
       this.router.navigate(['/bind'],{
         queryParams:{data:JSON.stringify(data)}
       });
     
  }

}
