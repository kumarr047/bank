import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
head="Frequently Asked Questions";
paraone="How can I apply for a Personal Loan?";
paratwo="What are the required documents under each program?";
parathree="Do you offer top up on existing Personal Loans?";
parafour="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce ut placerat orci nulla.";
parafive="View More FAQ’s";
  constructor() { }

  ngOnInit(): void {
  }

}
