import { Component, OnInit } from '@angular/core';
import {ServiceService } from '../service.service';

@Component({
  selector: 'app-getservice',
  templateUrl: './getservice.component.html',
  styleUrls: ['./getservice.component.css']
})
export class GetserviceComponent implements OnInit {

  constructor(public service:ServiceService) { }

  public url;

  public error;

  ngOnInit(): void {

    this.service.getdata().subscribe(x=>this.url=x,err => this.error =err);
  }



}
