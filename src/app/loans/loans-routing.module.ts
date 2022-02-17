import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenfitsComponent } from './benfits/benfits.component';
import { DocumentsComponent } from './documents/documents.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EligibiltycalculatorComponent } from './eligibiltycalculator/eligibiltycalculator.component';
import { EmiComponent } from './emi/emi.component';
import { FeaturesComponent } from './features/features.component';
import { InterestComponent } from './interest/interest.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path: '',component: PersonalloanComponent,
  children: [
    {path: '',component:QuestionComponent},
  {path: 'personalloan',component:PersonalloanComponent},
  {path: 'question',component: QuestionComponent},
  {path: 'features',component: FeaturesComponent},
  {path: 'benfits',component: BenfitsComponent},
  {path: 'documents',component: DocumentsComponent},
  {path: 'eligibility',component: EligibilityComponent},
  {path: 'interest',component: InterestComponent},
  {path: 'emi',component: EmiComponent},
  {path: 'eligibilitycalculator',component: EligibiltycalculatorComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule { }
