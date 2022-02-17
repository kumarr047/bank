import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-looking',
  templateUrl: './looking.component.html',
  styleUrls: ['./looking.component.css']
})
export class LookingComponent implements OnInit {
head="What are you looking for?";
  constructor() { }

  ngOnInit(): void {
  }

}
