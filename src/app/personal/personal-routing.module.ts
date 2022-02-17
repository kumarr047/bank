import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeloanComponent } from './homeloan/homeloan.component';

const routes: Routes = [
  {path: '',component: HomeloanComponent},
 
    {path: 'homeloan',component: HomeloanComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
