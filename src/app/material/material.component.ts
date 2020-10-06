import { Component, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MyDialogComponent} from '../my-dialog/my-dialog.component'


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  name:string;
  father:string;
  public output;
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent,{
      height: '380px',
      width: '400px',
      data: {name:this.name
        , father: this.father}
    });

    

    dialogRef.afterClosed().subscribe(result => {
      this.output= result;
    });
  }

  ngOnInit(): void {
  }

}
