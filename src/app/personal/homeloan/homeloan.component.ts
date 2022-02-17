import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeloan',
  templateUrl: './homeloan.component.html',
  styleUrls: ['./homeloan.component.css']
})
export class HomeloanComponent implements OnInit {

  multipleText: any[] = [
    { img:'../assets/saving.jpg',headone: 'Savings Account', textone: 'Zwei flinke Boxer jagen die quirlige Eva und...' ,color:'purple'},
     { img:'../assets/health.jpg', headone: 'Health Insurance', textone: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' ,color:'lightgreen'},
     {  img:'../assets/msme.jpg',headone: 'MSME Loan', textone: 'Zwei flinke Boxer jagen die quirlige Eva und...',color:'orange' },
     { img:"../assets/agri.jpg",headone: 'Savings Account', textone: 'Zwei flinke Boxer jagen die quirlige Eva und...' ,color:'purple'},
     { img:"../assets/home.png", headone: 'Health Insurance', textone: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' ,color:'lightgreen'},
     {  img:'../assets/retail.jpg',headone: 'MSME Loan', textone: 'Zwei flinke Boxer jagen die quirlige Eva und...',color:'orange' },
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
