import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-dashboard',
  templateUrl: './job-dashboard.component.html',
  styleUrls: ['./job-dashboard.component.scss']
})
export class JobDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bannerSubtitle = 'UI/UX Design';
  bannerTitle = 'HIRING PROCESS';

  jobStatus: string[] = ["Not-Applied","Applied","On-Progress","In-Interview","Qualified","Rejected"];

  
}
