import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  firsthead="Eligibility Borrowers";
  paraone="Salaried permanent employees";
  paratwo="Professionals and individuals with high net worth";
  parathree="Regular pensioners or Family pensioners drawing regular monthly pension through Branch";
  parafour="Staff members";
  parafive="Retired employees (other than dismissed/compulsorily retired) of our Bank";
secondhead="Co-Applicant";
parasix="Applications to be considered on individual basis only. Co-applicants not to be allowed.";
thirdhead="Quantum of Advance";
paraseven="Unsecured/Clean";
paraeight="Salaried persons: 15 times of monthly Net Emoluments.";

  constructor() { }

  ngOnInit(): void {
  }

}
