import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { ContinueComponent } from './continue/continue.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { ProductComponent } from './product/product.component';
// import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
// import { HighchartsChartModule } from 'highcharts-angular';
import { NgChartsModule } from 'ng2-charts';
// For MDB Angular Free
 // import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
 
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ContinueComponent,
    FooterComponent,
    OfferComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
