import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { ExampleBComponent } from './example-b/example-b.component';
import { ExampleCComponent } from './example-c/example-c.component';
import { FeaturesComponent } from './features/features.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations:[ExampleAComponent, ExampleBComponent, ExampleCComponent, FeaturesComponent],
  exports: [ExampleAComponent, ExampleBComponent, ExampleCComponent, FeaturesComponent],

  
  
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  
})
export class SharedModule { }
