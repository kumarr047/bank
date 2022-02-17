import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benfits',
  templateUrl: './benfits.component.html',
  styleUrls: ['./benfits.component.css']
})
export class BenfitsComponent implements OnInit {
head="Benfits";
paraone="Minimal documentation";
paratwo="We give you the flexibility to choose the loan tenure. You can apply for a loan from 12 to 72* months.";
parathree="The benefits are applicable for select customers upon completion of online verification and acceptance of the final offer.";
  constructor() { }

  ngOnInit(): void {
  }

}
