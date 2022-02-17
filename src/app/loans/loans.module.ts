import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { QuestionComponent } from './question/question.component';
import { FeaturesComponent } from './features/features.component';
import { BenfitsComponent } from './benfits/benfits.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { InterestComponent } from './interest/interest.component';
import { EmiComponent } from './emi/emi.component';
import { EligibiltycalculatorComponent } from './eligibiltycalculator/eligibiltycalculator.component';


@NgModule({
  declarations: [
    PersonalloanComponent,
    QuestionComponent,
    FeaturesComponent,
    BenfitsComponent,
    DocumentsComponent,
    EligibilityComponent,
    InterestComponent,
    EmiComponent,
    EligibiltycalculatorComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
