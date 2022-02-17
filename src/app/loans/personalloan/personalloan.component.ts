import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {

head="Personal Loan";
para="We work hard to provide the best to our families so that they lead happy and comfortable lives. Certain events like unfortunate death of earning member, critical illness, medical emergencies, accidents, natural and man made calamities etc. can adversely affect our family's well being and finances.";

  constructor() { }

  ngOnInit(): void {
  }

}
