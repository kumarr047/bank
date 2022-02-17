import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  multipleText: any[] = [
    { img:'../assets/flower.jpg',headone: 'Agriculture', textone: 'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris' },
     { img:'../assets/hand.jpg', headone: 'Corporate Credit', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
     {  img:'../assets/flower.png',headone: 'Insurance', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
     { img:'../assets/first.jpg',headone: 'Goverment Business Products', textone: 'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris' },
     { img:'../assets/second.jpg', headone: 'MSME', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
     {  img:'../assets/three.jpg',headone: 'Account Creation', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
     { img:'../assets/four.jpg',headone: 'Retail', textone: 'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris' },
     { img:'../assets/five.jpg', headone: 'Third Party products-Fund', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   }
  ];

  // multipleTexts: any[] = [
  //   { img:'../assets/first.jpg',headone: 'Goverment Business Products', textone: 'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris' },
  //    { img:'../assets/second.jpg', headone: 'MSME', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
  //    {  img:'../assets/three.jpg',headone: 'IAccount Creation', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   },
   
  // ];

  // multipleTextes: any[] = [
  //   { img:'../assets/four.jpg',headone: 'Retail', textone: 'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris' },
  //    { img:'../assets/five.jpg', headone: 'Third Party products-Fund', textone:'Aliquam faucibus ,odio noc commodo aliquam,noque folis placorat dui,a porta anto loctus  dapibus est.Aliquam a bibondum mi,sod condimontum est.Mauris'   }
     
   
  
  constructor() { }

  ngOnInit(): void {
  }

}
