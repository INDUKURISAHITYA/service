import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routers} from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule,Material} from './mat/mat.module';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { FormarrayComponent } from './formarray/formarray.component';

import { FormArray1Component } from './form-array1/form-array1.component';




@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    MyDialogComponent,
    FormarrayComponent,
    routers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    
  ],
  entryComponents: [
    MyDialogComponent,MaterialComponent
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
