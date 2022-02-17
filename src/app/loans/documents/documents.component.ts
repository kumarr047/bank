import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  head="Required Documents";
  paraone="Address proof (Passport/Aadhaar/Driving License/Voter’s ID)";
  paratwo="Income proof - Salary slips of the last 3 months";
  parathree="Bank statements for the last 6 months of the main operational/salaried bank account";
  parafour="PAN card";
  constructor() { }

  ngOnInit(): void {
  }

}
