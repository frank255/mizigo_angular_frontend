import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatCardModule,MatTabsModule
  ],
  exports: [MatToolbarModule,MatCardModule,MatTabsModule],
})
export class SharedModule { }
