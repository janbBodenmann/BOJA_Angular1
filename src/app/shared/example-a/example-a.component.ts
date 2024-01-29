import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrl: './example-a.component.scss'
})
export class ExampleAComponent implements OnInit{
  public title = 'Example A';
  constructor(){}
  ngOnInit() {
      
  }
}
