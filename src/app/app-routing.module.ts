import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './business/loan/loan.component';
import { ContinueComponent } from './continue/continue.component';
import { QuestionComponent } from './loans/question/question.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:'',loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)},
  {path:'personal',loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule)},
  {path:'business',loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)},
  {path:'nri',loadChildren: () => import('./nri/nri.module').then(m => m.NriModule)},
  {path:'rural',loadChildren: () => import('./rural/rural.module').then(m => m.RuralModule)},
  {path:'loans',loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule)},
  {path:'insurance',loadChildren: () => import('./insurance/insurance.module').then(m => m.InsuranceModule)},
  {path:'accountopening',loadChildren: () => import('./accountopening/accountopening.module').then(m => m.AccountopeningModule)},
  {path:'investment',loadChildren: () => import('./investment/investment.module').then(m => m.InvestmentModule)},
  {path: 'loan',component: LoanComponent},
  {path: 'continue',component: ContinueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
