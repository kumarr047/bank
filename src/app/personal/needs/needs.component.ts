import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {

  tittle="Connecting All Your Banking Needs";
  para="A smart mobile Application you can connect your banking needs";
  sub="Download our App on";
  constructor() { }

  ngOnInit(): void {
  }

}
