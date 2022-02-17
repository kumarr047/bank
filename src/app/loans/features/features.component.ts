import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  head="Features";
  paraone="Star Personal Loan Scheme provides loan to meet various Personal requirements of customers and their family.";
  paratwo="Bank offers loans for marriage expenses, medical expenses, educational expenses, purchase of consumer durables etc. Maximum quantum of advance is Rs.20.00 lacs, depending upon the income, with very attractive interest rate and easy repayment plan.";
  parathree="To fulfil your Personal Loan needs, just give a missed call on 8010968305 or SMS to 7669300024.";
  parafour="Please visit our nearest branch for details.";

  constructor() { }

  ngOnInit(): void {
  }

}
