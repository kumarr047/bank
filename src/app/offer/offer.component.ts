import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  multipleText: any[] = [
    { img:'../assets/box.jpg',headone: 'Credit Card', textone: 'Get instant credit offers on your card',more:"Know more ->" ,color:'purple'},
     { img:'../assets/box.jpg', headone: 'Debit Card', textone: 'Get instant credit offers on your card',more:"Know more ->" ,color:'lightgreen'},
     {  img:'../assets/box.jpg',headone: 'Credit Card', textone: 'Get instant credit offers on your card',more:"Know more ->",color:'orange' },
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
