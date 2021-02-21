import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.css']
})
export class FormeComponent implements OnInit {
  forme: any;

  constructor() { }

  ngOnInit(): void {
  }
    showData(formulaire){
      console.log(formulaire.value);
    }


}
