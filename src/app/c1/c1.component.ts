import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  varb = 'hello';
  color = "blue";
  constructor() { }

  ngOnInit(): void {
  }

  getColor(): void {
    this.color = "blue";
  }

}
