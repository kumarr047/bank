import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  constructor(private router:Router) { }

  // offers =[
  //   {titre: "Architectes Sécurité",
  //   contenu: "Nous recherchons un Architecte sécurité pour une mission longue (3 mois renouvelables horizon 2 ans voire plus) Paris intra-muros.",
  //   montant: " Partenaire historique F2I - TJM 700€",
  //   image:"../assets/saving.jpg",
    
  //   },
  //   {titre: " Sécurité",
  //   contenu: "Nous recherchons un Architecte sécurité pour une mission longue (3 mois renouvelables horizon 2 ans voire plus) Paris intra-muros.",
  //   montant: " Partenaire historique F2I - TJM 700€"
  //   },
  //   {titre: "Architectes ",
  //   contenu: "Nous recherchons un Architecte sécurité pour une mission longue (3 mois renouvelables horizon 2 ans voire plus) Paris intra-muros.",
  //   montant: " Partenaire historique F2I - TJM 700€"
  //   }
  // ]
  // onSub(myForm: NgForm) {
  //   console.log(myForm);
  // }

  logForm = new FormGroup({
    number: new FormControl('', [Validators.required]),
  });


  OnlyNumberAllowed(event: { which: any; keyCode: any }): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricted is' + charCode);
      return false;
    }
    return true;
  }


  
  continue(){
    this.router.navigate(['/continue'])
  }
  ngOnInit(): void {
  }
 

}
