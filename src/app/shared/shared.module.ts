import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';



@NgModule({
  declarations:[ExampleAComponent, ExampleBComponent, ExampleCComponent],
  exports: [ExampleAComponent, ExampleBComponent, ExampleCComponent],

  
  
  imports: [
    CommonModule 
  ],
  
})
export class SharedModule { }
