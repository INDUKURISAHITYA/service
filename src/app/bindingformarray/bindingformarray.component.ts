import { Component, OnInit, Output } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

export interface PeriodicElement {
  name: string;
  pay: string;
}


@Component({
  selector: 'app-bindingformarray',
  templateUrl: './bindingformarray.component.html',
  styleUrls: ['./bindingformarray.component.css']
})
export class BindingformarrayComponent implements OnInit {


   public data;
   public output;
  public displayedColumns: string[] = [ 'name', 'pay'];
  

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      console.log(this.data=JSON.parse(params.data));
    })

    for(let i=0;i<this.data.arr.length;i++)
    {
       console.log(this.output= this.data.arr);
    }

  }

}
