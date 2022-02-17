import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { ProductsComponent } from './products/products.component';
import { NeedsComponent } from './needs/needs.component';
import { LookingComponent } from './looking/looking.component';


@NgModule({
  declarations: [
    HomeloanComponent,
    ProductsComponent,
    NeedsComponent,
    LookingComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
