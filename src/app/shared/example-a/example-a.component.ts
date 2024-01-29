import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-a',
  templateUrl: './example-a.component.html',
  styleUrls: ['./example-a.component.scss']
})
export class ExampleAComponent implements OnInit {
  @Input() public headLine: string | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }
}
